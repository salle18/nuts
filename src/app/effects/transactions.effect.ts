import {Injectable} from '@angular/core';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {AccountsActions, TransactionActions} from '../actions';
import {Account, PaginatedData, Transaction} from '../models';
import {ApiService} from '../services';

const toData = (paginatedData: PaginatedData<any>) => paginatedData.data;

@Injectable()
export class TransactionsEffects {
    @Effect()
    public load$: Observable<Action> =
        this.actions$.ofType(TransactionActions.LOAD)
            .map(toPayload)
            .switchMap(
                account =>
                    this.apiService.loadTransactions(account)
                        .map(toData)
                        .map(
                            (transactions: Transaction[]) =>
                                new TransactionActions.LoadSuccessAction(transactions))
                        .catch(
                            () => Observable.of(new TransactionActions.LoadFailAction(account))));

    public constructor(private actions$: Actions, private apiService: ApiService) {}
}
