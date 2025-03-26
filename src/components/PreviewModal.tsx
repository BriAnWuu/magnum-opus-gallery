"use client";

import { Artwork } from "@/lib/types";
import Image from "next/image";
import { useContext } from "react";
import { createPortal } from "react-dom";
import useGetArtworkById from "./hooks/useGetArtworkById";
import { articContext } from "./providers/artic-provider";
import { AspectRatio } from "./ui/aspect-ratio";

export default function PreviewModal({ id }: Partial<Artwork>) {
    const { imageUrl, imageConfig } = useContext(articContext);

    // todo: handle undifined id
    const { data, error, isLoading, isError } = useGetArtworkById(id ?? -1);

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (isError) {
        return <p>Error: {(error as Error).message}</p>;
    }

    const {
        title,
        date_start,
        date_end,
        place_of_origin,
        artist_titles,
        description,
        dimensions,
        medium_display,
        image_id,
    } = data.data;

    return createPortal(
        <>
            <div className="fixed z-2 w-1/2 rounded-md bg-secondary overflow-scroll">
                <AspectRatio ratio={16 / 9}>
                    <Image
                        src={`${imageUrl}/${image_id}${imageConfig}`}
                        alt={`image of ${title}`}
                        fill
                        priority
                        className="w-full rounded-t-md object-cover"
                        sizes="(max-width:768px) 100%, (max-width:1024px) 100%, 100%"
                    />
                </AspectRatio>
                <section className="relative w-full flex flex-col gap-2 rounded-b-md shadow-[0_0_4rem_6rem] shadow-secondary p-4">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p>{`${date_start} ~ ${date_end}`}</p>
                    <p>{place_of_origin}</p>
                    <p>{artist_titles?.join(", ")}</p>
                    <p>{description}</p>
                    <p>{dimensions}</p>
                    <p>{medium_display}</p>
                </section>
            </div>
        </>,
        document.body
    );
}
