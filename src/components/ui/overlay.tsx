import { motion } from "framer-motion";
import { closeSpring, openSpring } from "../animations/card-animations";

export default function Overlay({
    isClosing,
    handleOnClick,
}: {
    isClosing: boolean;
    handleOnClick?: () => void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={isClosing ? { opacity: 0 } : { opacity: 0.85 }}
            transition={isClosing ? closeSpring : openSpring}
            className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-zinc-900"
            onClick={handleOnClick}
        />
    );
}
