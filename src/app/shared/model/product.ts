import { Photo } from "./photo";

export class Product {
    
    id?: string;
    name: string;
    description: string;
    price?: number;
    iva?: number;
    quantity?: number;
    photos: Photo[];
}