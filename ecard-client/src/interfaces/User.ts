export default interface User {
    _id?: number;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    phone?: string;
    email: string;
    password: string;
    image_url?: string;
    image_alt?: string;
    state?: string;
    country?: string;
    city?: string;
    street?: string;
    housenumber?: string;
    zip?: string;
    isAdmin?: boolean;
    buisness?: boolean;
    /* favcards?: Array<string>; */
}
