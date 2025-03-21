"use client";

import useGetArtworks from "@/components/hooks/useGetArtworks";
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
    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [inView]);

    console.log(inView);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error: {(error as Error).message}</p>;
    }

    return (
        <main>
            <section className="flex flex-col gap-4">
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
                <p>Loading more...</p>
            ) : (
                <p>No more works found</p>
            )}
            <div className="h-4 w-4" ref={ref} />
        </main>
    );
}
