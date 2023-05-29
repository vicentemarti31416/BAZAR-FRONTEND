import { Item } from "./item";

export class Order {

    id: number;
    clientId: number;
    items: Item[];
    amount: number;
    iban: string;
}