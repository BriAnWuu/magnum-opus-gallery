import Image from "next/image";
import { useContext } from "react";
import { articContext } from "../providers/artic-provider";
import { AspectRatio } from "../ui/aspect-ratio";

export default function ImageDisplay({
    image_id,
    title,
    priority = false,
}: {
    image_id?: string;
    title?: string;
    priority?: boolean;
}) {
    const { imageUrl, imageConfig } = useContext(articContext);

    //todo: handle undifined id and title

    return (
        <AspectRatio ratio={16 / 9}>
            <Image
                src={`${imageUrl}/${image_id}${imageConfig}`}
                alt={`image of ${title}`}
                fill
                priority={priority}
                className="size-full rounded-md object-cover"
                sizes="(max-width:768px) 100%, (max-width:1024px) 100%, 33%"
            />
        </AspectRatio>
    );
}
