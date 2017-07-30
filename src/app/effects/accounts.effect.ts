import {Injectable} from '@angular/core';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {AccountsActions} from '../actions';
import {Account} from '../models';
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
    public fetch$: Observable<Action> =
        this.actions$.ofType(AccountsActions.FETCH)
            .map(toPayload)
            .switchMap((account: Account) => this.apiService.fetchAccount(account)
                    .mergeMap((fetchedAccount: Account) => [
                                new AccountsActions.FetchSuccessAction(fetchedAccount),
                                new AccountsActions.SelectAction(fetchedAccount)
                            ])
                    .catch(() => Observable.of(new AccountsActions.FetchFailAction(account))));

    public constructor(private actions$: Actions, private apiService: ApiService) {}
}
