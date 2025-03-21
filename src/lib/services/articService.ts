import { Artwork } from "../types";

const fields =
    "id,api_link,title,has_not_been_viewed_much,date_start,date_end,artist_display,place_of_origin,description,dimensions,medium_display,credit_line,exhibition_history,provenance_text,fiscal_year,latitude,longitude,artwork_type_title,artwork_type_id,department_title,department_id,artist_ids,artist_titles,term_titles,style_ids,classification_ids,subject_ids,material_ids,technique_ids,image_id";

// export type Page = {
//     data?: Artwork[];
//     currentPage: number;
//     nextPage: number;
// };

export async function getArtworks({ pageParam }: { pageParam: unknown }) {
    const limit = 10;

    const response = await fetch(
        `https://api.artic.edu/api/v1/artworks?page=${pageParam}&limit=${limit}&fields=${fields}`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch artworks");
    }

    const raw = await response.json();

    return raw;
}

export async function getArtworkById(id: number) {}
