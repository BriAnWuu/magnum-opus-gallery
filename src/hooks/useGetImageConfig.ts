"use client";

import { getImageConfig } from "@/lib/services/articService";
import { useQuery } from "@tanstack/react-query";

export default function useGetImageConfig() {
    return useQuery({
        queryKey: ["imgConfig"],
        queryFn: () => getImageConfig(),
    });
}
