import PreviewModal from "@/components/PreviewModal";

type ModalPageProps = {
    params: {
        id: number;
    };
};

export default async function ModalPage({ params }: ModalPageProps) {
    const { id } = await params;
    // if (Object.keys(params).length === 0) {
    //     return null;
    // }

    return <PreviewModal id={id} />;
}
