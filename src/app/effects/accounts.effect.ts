import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import {Effect, Actions, toPayload} from '@ngrx/effects';
import {go} from '@ngrx/router-store';
import { Observable } from 'rxjs/Observable';

import {AccountsActions, TransactionActions} from '../actions';
import { Account } from '../models';
import {ApiService} from "../services";

@Injectable()
export class AccountsEffects {

    @Effect()
    select$: Observable<Action> = this.actions$
        .ofType(AccountsActions.SELECT)
        .map(toPayload)
        .mergeMap((account: Account) => [
            new TransactionActions.LoadAction(account),
            go(`accounts/${account.id}`)
        ]);

    @Effect()
    load$: Observable<Action> = this.actions$
        .ofType(AccountsActions.LOAD)
        .switchMap(() =>
            this.apiService.loadAccounts()
                .map((accounts: Account[]) => new AccountsActions.LoadSuccessAction(accounts))
                .catch(() => Observable.of(new AccountsActions.LoadFailAction()))
        );

    constructor(private actions$: Actions, private apiService: ApiService) { }
}