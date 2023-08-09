export default interface Card {
    id?: number;
    creatorId?: number | string;
    title: string;
    subtitle?: string;
    description: string;
    phone: string;
    email: string;
    web: string;
    image_url?: string;
    image_alt?: string;
    state?: string;
    country: string;
    city: string;
    street: string;
    housenumber: string;
    zip: string;
}