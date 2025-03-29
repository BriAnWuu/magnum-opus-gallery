export default async function ArtworkPage({
    params,
}: {
    params: Promise<{ id: number }>;
}) {
    const { id } = await params;
    return <p>{id}</p>;
}
