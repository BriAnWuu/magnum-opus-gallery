import { motion } from "framer-motion";

export default function Overlay({
    handleOnClick,
}: {
    handleOnClick: () => void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-zinc-900"
            onClick={handleOnClick}
        />
    );
}
