import { RefObject, useState } from "react";

export default function useModalPosition(
    modalRef: RefObject<HTMLDivElement>,
    cardId: number
) {
    const [position, setPosition] = useState({});
}
