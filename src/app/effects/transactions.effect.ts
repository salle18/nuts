import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import {Effect, Actions, toPayload} from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import {AccountsActions, TransactionActions} from '../actions';
import {Account, PaginatedData, Transaction} from '../models';
import {ApiService} from "../services";

const toData = (paginatedData: PaginatedData<any>) => paginatedData.data;

@Injectable()
export class TransactionsEffects {

    @Effect()
    load$: Observable<Action> = this.actions$
        .ofType(TransactionActions.LOAD)
        .map(toPayload)
        .switchMap(account =>
            this.apiService.loadTransactions(account)
                .map(toData)
                .do(t => console.log(t))
                .map((transactions: Transaction[]) => new TransactionActions.LoadSuccessAction(transactions))
                .catch(() => Observable.of(new TransactionActions.LoadFailAction(account)))
        );

    constructor(private actions$: Actions, private apiService: ApiService) { }
}
