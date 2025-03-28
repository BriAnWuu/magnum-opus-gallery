import PreviewModal from "@/components/PreviewModal";

type ModalPageProps = {
    params: Promise<{
        id: number;
    }>;
};

export default async function ModalPage({ params }: ModalPageProps) {
    const { id } = await params;

    // todo: handle undifined id and skeleton
    return <PreviewModal id={id} />;
}
