import {Injectable} from '@angular/core';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {MessagesActions, TransactionActions} from '../actions';
import {Account, Message, PaginatedData, Transaction} from '../models';
import {ApiService} from '../services';

const toData = (paginatedData: PaginatedData<any>) => paginatedData.data;

@Injectable()
export class TransactionsEffects {
    @Effect()
    public load$: Observable<Action> =
        this.actions$.ofType(TransactionActions.LOAD)
            .map(toPayload)
            .switchMap(
                (account: Account) =>
                    this.apiService.loadTransactions(account)
                        .map(toData)
                        .map(
                            (transactions: Transaction[]) =>
                                new TransactionActions.LoadSuccessAction(transactions))
                        .catch(
                            () => Observable.of(new TransactionActions.LoadFailAction(account))));

    @Effect()
    public loadFail$: Observable<Action> =
        this.actions$.ofType(TransactionActions.LOAD_FAIL)
            .map(toPayload)
            .map((account: Account) => Object.assign(new Message(), {
                messageKey: 'error_transactions_load_fail',
                titleKey: 'error_server_general_error',
                actionKey: 'retry_action',
                action: new TransactionActions.LoadAction(account)
            }))
            .map(message => new MessagesActions.ShowDialogAction(message));

    public constructor(private actions$: Actions, private apiService: ApiService) {}
}
