import {
    FetchNextPageOptions,
    InfiniteData,
    InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { useRef } from "react";

export default function useThrottle(
    fetchNextFunc: (
        options?: FetchNextPageOptions
    ) => Promise<
        InfiniteQueryObserverResult<InfiniteData<any, unknown>, Error>
    >,
    delay: number = 1000
) {
    function throttle<T extends (...args: any[]) => any>(
        func: T,
        delay: number = 1000
    ): (...args: Parameters<T>) => void {
        let timeoutFunc: ReturnType<typeof setTimeout>;
        let lastRan: number;

        return (...args: Parameters<T>) => {
            if (!lastRan) {
                func(...args);
                lastRan = Date.now();
            } else {
                clearTimeout(timeoutFunc);
                timeoutFunc = setTimeout(() => {
                    if (Date.now() - lastRan >= delay) {
                        func(...args);
                        lastRan = Date.now();
                    }
                }, delay - (Date.now() - lastRan));
            }
        };
    }

    // useRef to persist throttle across renders
    const throttledFetch = useRef(
        throttle(() => {
            fetchNextFunc();
        }, delay)
    );

    return throttledFetch.current;
}
