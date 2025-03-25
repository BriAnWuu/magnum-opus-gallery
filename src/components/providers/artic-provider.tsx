"use client";

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
    return (
        <articContext.Provider
            value={{
                imageUrl: "https://www.artic.edu/iiif/2",
                imageConfig: "/full/843,/0/default.jpg",
            }}
        >
            {children}
        </articContext.Provider>
    );
}
