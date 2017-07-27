import {Currency} from "./Currency";

export class Account {
    public id: number = -1;
    public description: string = '';
    public currency_id: number = -1;
    public currency: Currency = new Currency();
    public amount: number = 0;
}
