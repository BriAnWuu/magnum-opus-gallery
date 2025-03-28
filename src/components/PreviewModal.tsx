"use client";

import useGetArtworkById from "@/hooks/useGetArtworkById";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { PreviewModalSkeleton } from "./Skeletons";
import CloseButton from "./ui/close-button";
import ImageDisplay from "./ui/image-display";
import Overlay from "./ui/overlay";

export default function PreviewModal({
    id,
    className,
}: {
    id: number;
    className: string;
}) {
    const router = useRouter();

    // todo: handle undifined id
    const { data, error, isLoading, isError } = useGetArtworkById(id ?? -1);

    if (isLoading) {
        return <PreviewModalSkeleton className={className} />;
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

    const handleNavigateHome = () => {
        router.push("/", { scroll: false });
    };

    return createPortal(
        <>
            <Overlay handleOnClick={handleNavigateHome} />
            <div
                className={cn(
                    "fixed top-1/2 left-1/2 -translate-1/2 z-2 rounded-md bg-secondary overflow-scroll",
                    className
                )}
            >
                <CloseButton handleOnClick={handleNavigateHome} />
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
