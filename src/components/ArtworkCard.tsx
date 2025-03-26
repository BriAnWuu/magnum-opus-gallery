import { Artwork } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { articContext } from "./providers/artic-provider";
import { AspectRatio } from "./ui/aspect-ratio";

export default function ArtworkCard({ id, title, image_id }: Partial<Artwork>) {
    const { imageUrl, imageConfig } = useContext(articContext);

    return (
        <article>
            <Link href={`/modal/${id}`}>
                <AspectRatio ratio={16 / 9}>
                    <Image
                        src={`${imageUrl}/${image_id}${imageConfig}`}
                        alt={`image of ${title}`}
                        fill
                        className="size-full rounded-md object-cover"
                        sizes="(max-width:768px) 100%, (max-width:1024px) 100%, 33%"
                    />
                </AspectRatio>
            </Link>
        </article>
    );
}
