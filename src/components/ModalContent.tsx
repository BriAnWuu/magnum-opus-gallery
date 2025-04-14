import { Artwork } from "@/lib/types";
import parse from "html-react-parser";
import ImageDisplay from "./ui/image-display";

export default function ModalContent({
    title,
    date_start,
    date_end,
    place_of_origin,
    artist_titles,
    description,
    dimensions,
    medium_display,
    image_id,
}: Partial<Artwork>) {
    return (
        <>
            <ImageDisplay image_id={image_id} title={title} priority={true} />
            <section className="relative w-full flex flex-col gap-2 rounded-b-md shadow-[0_0_4rem_6rem] shadow-secondary p-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <p>{`${date_start} ~ ${date_end}`}</p>
                <p>{place_of_origin}</p>
                <p>{artist_titles?.join(", ")}</p>
                {description && parse(description)}
                <p>{dimensions}</p>
                <p>{medium_display}</p>
            </section>
        </>
    );
}
