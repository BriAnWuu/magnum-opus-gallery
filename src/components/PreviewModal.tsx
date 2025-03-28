"use client";

import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import useGetArtworkById from "./hooks/useGetArtworkById";
import ImageDisplay from "./ui/image-display";
import Overlay from "./ui/overlay";
import XMark from "./ui/x-mark";

export default function PreviewModal({ id }: { id: number }) {
    const router = useRouter();

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
            <Overlay />
            <div className="fixed w-[600px] h-[90vh] top-1/2 left-1/2 -translate-1/2 z-2 rounded-md bg-secondary overflow-scroll">
                <div
                    className="absolute top-2 right-2 z-1 transition-all ease-in hover:scale-115"
                    onClick={() => {
                        router.back();
                    }}
                >
                    <XMark className="size-6 fill-secondary cursor-pointer" />
                </div>
                <ImageDisplay
                    image_id={image_id}
                    title={title}
                    priority={true}
                />
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
