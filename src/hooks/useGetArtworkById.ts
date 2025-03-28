"use client";

import { getArtworkById } from "@/lib/services/articService";
import { useQuery } from "@tanstack/react-query";

export default function useGetArtworkById(id: number) {
    return useQuery({
        queryKey: ["artwork", { id }],
        queryFn: () => getArtworkById(id),
    });
}
