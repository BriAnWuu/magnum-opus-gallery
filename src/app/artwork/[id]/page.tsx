import Artwork from "@/components/Artwork";

type ArtworkPageProps = {
    params: Promise<{
        id: number;
    }>;
};

export default async function ArtworkPage({ params }: ArtworkPageProps) {
    const { id } = await params;

    return <Artwork id={id} />;
}
