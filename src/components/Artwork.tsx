"use client";

import useGetArtworkById from "@/hooks/useGetArtworkById";
import parse from "html-react-parser";
import ImageDisplay from "./ui/image-display";

export default function Artwork({ id }: { id: number }) {
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

    return (
        <main className="w-full flex flex-col items-center gap-4 p-4 md:p-8">
            <section className="w-full flex flex-col items-center gap-4 md:gap-8 md:max-w-3xl lg:max-w-4xl">
                <ImageDisplay
                    image_id={image_id}
                    title={title}
                    priority={true}
                />
                <div className="w-full flex flex-col gap-2 max-w-3xl">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p>{`${date_start} ~ ${date_end}`}</p>
                    <p>{place_of_origin}</p>
                    <p>{artist_titles?.join(", ")}</p>
                    {description && parse(description)}
                    <p>{dimensions}</p>
                    <p>{medium_display}</p>
                </div>
            </section>
        </main>
    );
}
