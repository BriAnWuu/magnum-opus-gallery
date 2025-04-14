import PreviewModal from "@/components/PreviewModal";

type ModalPageProps = {
    params: Promise<{
        id: number;
    }>;
};

const className = "w-full sm:max-w-xl xl:max-w-3xl";

export default async function ModalPage({ params }: ModalPageProps) {
    const { id } = await params;

    // todo: handle undifined id
    return <PreviewModal id={id} className={className} />;
}
