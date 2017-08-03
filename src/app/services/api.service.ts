import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {environment} from '../../environments/environment';
import {Account, PaginatedData, Transaction} from '../models';

const api = environment.api;

@Injectable()
export class ApiService {
    public loadAccounts(): Observable<Account[]> {
        return this.httpClient.get<Account[]>(`${api}/accounts`).delay(2500);
    }

    public fetchAccount(account: Account): Observable<Account> {
        return this.httpClient.get(`${api}/accounts/${account.id}`).delay(2500);
    }

    public loadTransactions(account: Account): Observable<PaginatedData<Transaction>> {
        return this.httpClient
            .get<PaginatedData<Transaction>>(`${api}/accounts/${account.id}/transactions`)
            .delay(2500);
    }

    public constructor(private httpClient: HttpClient) {}
}
