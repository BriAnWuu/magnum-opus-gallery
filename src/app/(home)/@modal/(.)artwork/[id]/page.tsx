import PreviewModal from "@/components/PreviewModal";
import { PreviewModalSkeleton } from "@/components/Skeletons";

type ModalPageProps = {
    params: Promise<{
        id: number;
    }>;
};

const className = "w-[600px]";

export default async function ModalPage({ params }: ModalPageProps) {
    const { id } = await params;

    // todo: handle undifined id and skeleton
    return <PreviewModal id={id} className={className} />;
    // return <PreviewModalSkeleton className={className} />;
}
