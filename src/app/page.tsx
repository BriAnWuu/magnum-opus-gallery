"use client";

import useGetArtworks from "@/components/hooks/useGetArtworks";
import useGetMoreArtworks from "@/components/hooks/useGetMoreArtworks";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Artwork } from "@/lib/types";
import React, { useEffect } from "react";
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

    const { ref, inView } = useInView();
    useGetMoreArtworks(inView, fetchNextPage);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error: {(error as Error).message}</p>;
    }

    return (
        <main className="w-full flex flex-col justify-center items-center gap-4">
            <section className="w-3/4 flex flex-col gap-4">
                {data?.pages.map((page, idx) => (
                    <React.Fragment key={idx}>
                        {page.data.map((work: Artwork) => (
                            <article key={work.id}>
                                <h2>{work.title}</h2>
                                <p>{work.artist_display}</p>
                                <p>
                                    {work.date_start} - {work.date_end}
                                </p>
                                {/* <p>{work.description}</p> */}
                            </article>
                        ))}
                    </React.Fragment>
                ))}
            </section>
            {hasNextPage && isFetchingNextPage ? (
                <LoadingSpinner size={36} />
            ) : (
                <p className="text-center">No more works found</p>
            )}
            <div className="h-2" ref={ref} />
        </main>
    );
}
