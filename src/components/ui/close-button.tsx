import { X } from "lucide-react";
export default function CloseButton({
    handleOnClick,
}: {
    handleOnClick: () => void;
}) {
    return (
        <div
            className="absolute top-2 right-2 z-1 transition-all ease-in hover:scale-115"
            onClick={handleOnClick}
        >
            <X className="stroke-gray-500 cursor-pointer" />
        </div>
    );
}
