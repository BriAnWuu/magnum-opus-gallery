"use client";

import { getArtworks } from "@/lib/services/articService";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useGetArtworks() {
    return useInfiniteQuery({
        queryKey: ["artworks"],
        queryFn: getArtworks,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.data.length > 0 ? allPages.length + 1 : undefined;
        },
    });
}
