import PreviewModal from "@/components/PreviewModal";

type ModalPageProps = {
    params: Promise<{
        id: number;
    }>;
};

export default async function ModalPage({ params }: ModalPageProps) {
    const { id } = await params;

    return (
        <>
            <p>intercepted</p>
            <PreviewModal id={id} />
        </>
    );
}
