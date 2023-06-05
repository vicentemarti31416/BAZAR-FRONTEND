import { Photo } from "./photo";

export class Product {
    
    id?: string;
    name: string;
    price?: number;
    description: string;
    hasColors: boolean;
    colorName: string;
    colorCode: number;
    colorRgb: string;
    size: string;
    iva?: number;
    quantity?: number;
    photos: Photo[];
}