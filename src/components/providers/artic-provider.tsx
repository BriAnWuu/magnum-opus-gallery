"use client";

import useGetImageConfig from "@/hooks/useGetImageConfig";
import { createContext } from "react";

export const articContext = createContext({
    imageUrl: "",
    imageConfig: "",
});

export default function ArtICProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const { data, isLoading, error } = useGetImageConfig();

    if (isLoading) return <p>loading image config...</p>;
    if (error) return <p>error when fetching image config</p>;

    return (
        <articContext.Provider
            value={{
                imageUrl: data?.config.iiif_url,
                imageConfig: "/full/843,/0/default.jpg",
            }}
        >
            {children}
        </articContext.Provider>
    );
}
