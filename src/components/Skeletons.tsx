import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Skeleton } from "./ui/skeleton";

export function PreviewModalSkeleton({}) {
    return (
        <div className="size-full bg-neutral-900">
            <AspectRatio ratio={16 / 9}>
                <Skeleton className="size-full rounded-md" />
            </AspectRatio>
            <div className="relative w-full flex flex-col gap-2 rounded-b-md p-4">
                <Skeleton className="w-3/4 h-8 mb-2" />
                <Skeleton className="w-1/2 h-6" />
                <Skeleton className="w-3/5 h-6" />
                <Skeleton className="w-2/5 h-6" />
                <Skeleton className="w-8/9 h-6" />
                <Skeleton className="w-1/2 h-6" />
            </div>
        </div>
    );
}
