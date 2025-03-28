import { useInvertedBorderRadius } from "@/hooks/useInvertedBorderRadius";
import { Artwork } from "@/lib/types";
import { cn } from "@/lib/utils";
import { motion, useMotionValue } from "framer-motion";
import Link from "next/link";
import { memo, useState } from "react";
import { closeSpring, openSpring } from "./animations/card-animations";
import ImageDisplay from "./ui/image-display";
import Overlay from "./ui/overlay";

function Card({ id, title, image_id }: Partial<Artwork>) {
    // const [isSelected, setIsSelected] = useState<boolean>(false);

    // const y = useMotionValue(0);
    // const zIndex = useMotionValue(isSelected ? 2 : 0);

    // const inverted = useInvertedBorderRadius(20);

    // const checkZIndex = (latest) => {
    //     if (isSelected) {
    //         zIndex.set(2);
    //     } else if (!isSelected && latest.scaleX < 1.01) {
    //         zIndex.set(0);
    //     }
    // };

    return (
        <li
        // ref={containerRef}
        // className="relative"
        // onClick={() => setIsSelected((prev) => !prev)}
        >
            {/* <Overlay isSelected={isSelected} /> */}
            {/* <div
                className={cn(
                    "size-full relative pointer-events-none",
                    isSelected &&
                        "fixed max-w-[700px] inset-x-0 top-0 z-1 overflow-hidden"
                )}
            > */}
            <Link href={`/artwork/${id}`} scroll={false}>
                <motion.article
                // ref={cardRef}
                // style={{ ...inverted, zIndex, y }}
                // transition={isSelected ? openSpring : closeSpring}
                // onUpdate={checkZIndex}
                >
                    <ImageDisplay image_id={image_id} title={title} />
                </motion.article>
            </Link>
            {/* </div> */}

            {/* {!isSelected && ( */}
            {/* <Link className="absolute inset-0" href={`/artwork/${id}`} scroll={false} /> */}
            {/* )} */}
        </li>
    );
}

const ArtworkCard = memo(
    Card
    // (prev, next) => prev.isSelected === next.isSelected
);

export default ArtworkCard;
