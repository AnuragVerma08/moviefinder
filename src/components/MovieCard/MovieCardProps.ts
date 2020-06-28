export interface MovieCardProps {
    cardData: MovieCardDetails;
}

export interface MovieCardDetails {
    id?: number;
    title?: string;
    subtitle?: string;
    description?: string;
    year?: number;
    imageUrl?: string;
    rating: number;
}