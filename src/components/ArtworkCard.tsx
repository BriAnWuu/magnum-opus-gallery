import { Artwork } from "@/lib/types";
import Link from "next/link";
import ImageDisplay from "./ui/image-display";

export default function ArtworkCard({ id, title, image_id }: Partial<Artwork>) {
    return (
        <article>
            <Link href={`/artwork/${id}`}>
                <ImageDisplay image_id={image_id} title={title} />
            </Link>
        </article>
    );
}
