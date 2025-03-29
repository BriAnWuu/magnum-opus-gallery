import { cn } from "@/lib/utils";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Skeleton } from "./ui/skeleton";

export function PreviewModalSkeleton({ className }: { className: string }) {
    return (
        <div
            className={cn(
                "fixed top-1/2 left-1/2 -translate-1/2 z-2 rounded-md bg-gray-700 overflow-scroll",
                className
            )}
        >
            <AspectRatio ratio={16 / 9}>
                <Skeleton className="size-full rounded-md" />
            </AspectRatio>
            <div className="relative w-full flex flex-col gap-2 rounded-b-md p-4">
                <Skeleton className="w-3/4 h-8" />
                <Skeleton className="w-1/2 h-6" />
                <Skeleton className="w-3/5 h-6" />
                <Skeleton className="w-2/5 h-6" />
                <Skeleton className="w-8/9 h-6" />
                <Skeleton className="w-1/2 h-6" />
            </div>
        </div>
    );
}
