"use client";

import { useEffect, useState } from "react";

export default function useInitPosition(id: number) {
    const [position, setPosition] = useState<{ x: number; y: number } | null>(
        null
    );

    useEffect(() => {
        const node = document.getElementById(`${id}`);
        if (!node) {
            console.log("node not found");
            return;
        }

        const { top, left, width, height } = node.getBoundingClientRect();

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const x = left + width / 2 - centerX;
        const y = top + height / 2 - centerY;

        setPosition({ x, y });
    }, [id]);

    return position;
}
