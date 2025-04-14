"use client";

import ArtworkCard from "@/components/ArtworkCard";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import useGetArtworks from "@/hooks/useGetArtworks";
import useGetMoreArtworks from "@/hooks/useGetMoreArtworks";
import useThrottle from "@/hooks/useThrottle";
import { Artwork } from "@/lib/types";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isLoading,
        isError,
        isFetching,
        isFetchingNextPage,
    } = useGetArtworks();

    // api rate limit delay = 1000; add delay to see throttle effect
    const throttledFetch = useThrottle(fetchNextPage, 1000);
    const { ref, inView } = useInView();
    useGetMoreArtworks(inView, hasNextPage, isFetchingNextPage, throttledFetch);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error: {(error as Error).message}</p>;
    }

    return (
        <main className="w-full flex flex-col justify-center items-center gap-4">
            <ul
                className="w-3/4 flex flex-wrap gap-4"
                // className="grid grid-cols-3 gap-4 auto-cols-fr"
            >
                {data?.pages.map((page, idx) => (
                    <React.Fragment key={idx}>
                        {page.data.map((work: Artwork) => (
                            <ArtworkCard key={work.id} {...work} />
                        ))}
                    </React.Fragment>
                ))}
            </ul>
            {hasNextPage ? (
                <LoadingSpinner size={36} />
            ) : (
                <p className="text-center">No more works found</p>
            )}
            <div className="h-1" ref={ref} />
        </main>
    );
}
