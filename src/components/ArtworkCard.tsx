import { Artwork } from "@/lib/types";
import Image from "next/image";
import { useContext } from "react";
import { articContext } from "./providers/artic-provider";
import { AspectRatio } from "./ui/aspect-ratio";

export default function ArtworkCard({ title, image_id }: Partial<Artwork>) {
    const { imageUrl, imageConfig } = useContext(articContext);

    return (
        <article>
            <AspectRatio ratio={16 / 9}>
                <Image
                    src={`${imageUrl}/${image_id}${imageConfig}`}
                    alt={`image of ${title}`}
                    fill
                    className="size-full rounded-md object-cover"
                />
            </AspectRatio>
        </article>
    );
}
