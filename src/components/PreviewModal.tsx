"use client";

import useBodyScrollLock from "@/hooks/useBodyScrollLock";
import useGetArtworkById from "@/hooks/useGetArtworkById";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { closeSpring, openSpring } from "./animations/card-animations";
import ModalContent from "./ModalContent";
import { PreviewModalSkeleton } from "./Skeletons";
import CloseButton from "./ui/close-button";
import Overlay from "./ui/overlay";

export default function PreviewModal({
    id,
    className,
}: {
    id: number;
    className: string;
}) {
    const router = useRouter();
    const modalRef = useRef<HTMLDivElement>(null);
    const [isClosing, setIsClosing] = useState(false);

    useBodyScrollLock();

    // todo: handle undifined id
    const { data, error, isLoading, isError } = useGetArtworkById(id ?? -1);

    const handleClose = () => {
        setIsClosing(true);
    };
    const handleNavigateHome = () => {
        if (isClosing) router.push("/", { scroll: false });
    };

    if (isError) {
        return <p>Error: {(error as Error).message}</p>;
    }

    return createPortal(
        <>
            <Overlay isClosing={isClosing} />
            <div
                className="fixed p-8 inset-0 z-2 overflow-auto"
                onClick={handleClose}
            >
                <motion.div
                    ref={modalRef}
                    // style={{}}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={
                        isClosing
                            ? { opacity: 0, scale: 0.5 }
                            : { opacity: 1, scale: 1 }
                    }
                    transition={isClosing ? closeSpring : openSpring}
                    onAnimationComplete={handleNavigateHome}
                    className={cn(
                        "relative left-1/2 -translate-x-1/2 rounded-md bg-secondary overflow-hidden",
                        className
                    )}
                    onClick={(e) => e.stopPropagation()}
                >
                    <CloseButton handleOnClick={handleClose} />
                    {isLoading ? (
                        <PreviewModalSkeleton />
                    ) : (
                        <ModalContent {...data.data} />
                    )}
                </motion.div>
            </div>
        </>,
        document.body
    );
}
