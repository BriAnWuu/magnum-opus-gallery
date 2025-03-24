import {
    FetchNextPageOptions,
    InfiniteData,
    InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { useEffect } from "react";

export default function useGetMoreArtworks(
    inView: boolean,
    fetchNextFunc: (
        options?: FetchNextPageOptions
    ) => Promise<InfiniteQueryObserverResult<InfiniteData<any, unknown>, Error>>
) {
    return useEffect(() => {
        if (inView) {
            fetchNextFunc();
        }
    }, [inView]);
}
