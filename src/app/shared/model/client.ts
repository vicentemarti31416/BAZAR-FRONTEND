import { Order } from "./order";

export class Client {
    id: number;
    name: string;
    phone: number;
    email:string;
    conutry: string;
    city: string;
    postalCode: string;
    street: string;
    iban: string;
    orders: Order[];
    favorites: number[];
}