import { useEffect } from "react";

export default function useGetMoreArtworks(
    inView: boolean,
    hasNextPage: boolean,
    isFetchingNextPage: boolean,
    fetchNextFunc: () => void
) {
    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextFunc();
        }
    }, [inView, fetchNextFunc]);
}
