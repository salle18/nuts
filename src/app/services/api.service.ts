import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Account, PaginatedData, Transaction} from "../models";
import { environment } from '../../environments/environment';


const toJSON = (response: Response) => response.json();

const api = environment.api;

@Injectable()
export class ApiService {

    public loadAccounts(): Observable<Account[]> {
        return this.http.get(`${api}/accounts`).map(toJSON).delay(2500);
    }

    public loadTransactions(account: Account): Observable<PaginatedData<Transaction>> {
        return this.http.get(`${api}/accounts/${account.id}/transactions`).map(toJSON).delay(2500);
    }

    public constructor(private http: Http) {}
}
