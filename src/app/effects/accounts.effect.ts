import {Injectable} from '@angular/core';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {AccountsActions, MessagesActions} from '../actions';
import {Account, Message} from '../models';
import {ApiService} from '../services';

@Injectable()
export class AccountsEffects {
    @Effect()
    public load$: Observable<Action> =
        this.actions$.ofType(AccountsActions.LOAD)
            .switchMap(
                () => this.apiService.loadAccounts()
                          .map(
                              (accounts: Account[]) =>
                                  new AccountsActions.LoadSuccessAction(accounts))
                          .catch(() => Observable.of(new AccountsActions.LoadFailAction())));

    @Effect()
    public loadFail$: Observable<Action> =
        this.actions$.ofType(AccountsActions.LOAD_FAIL)
            .map(() => Object.assign(new Message(), {
                messageKey: 'error_accounts_load_fail',
                titleKey: 'error_server_general_error',
                actionKey: 'retry_action',
                action: new AccountsActions.LoadAction()
            }))
            .map(message => new MessagesActions.ShowDialogAction(message));

    @Effect()
    public fetch$: Observable<Action> =
        this.actions$.ofType(AccountsActions.FETCH)
            .map(toPayload)
            .switchMap(
                (account: Account) =>
                    this.apiService.fetchAccount(account)
                        .mergeMap(
                            (fetchedAccount: Account) =>
                                [new AccountsActions.FetchSuccessAction(fetchedAccount),
                                 new AccountsActions.SelectAction(fetchedAccount)])
                        .catch(() => Observable.of(new AccountsActions.FetchFailAction(account))));

    @Effect()
    public fetchFail$: Observable<Action> =
        this.actions$.ofType(AccountsActions.FETCH_FAIL)
            .map(toPayload)
            .map((account: Account) => Object.assign(new Message(), {
                messageKey: 'error_accounts_fetch_fail',
                titleKey: 'error_server_general_error',
                actionKey: 'retry_action',
                action: new AccountsActions.FetchAction(account)
            }))
            .map(message => new MessagesActions.ShowDialogAction(message));

    public constructor(private actions$: Actions, private apiService: ApiService) {}
}
