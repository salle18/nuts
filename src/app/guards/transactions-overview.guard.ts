import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {AccountsActions, TransactionsActions} from '../actions';
import {Account} from '../models';
import {StateService} from '../services';
import {AuthGuard} from './auth.guard';

@Injectable()
export class TransactionsOverviewGuard extends AuthGuard implements CanActivate {
    public canActivate(activatedRoute: ActivatedRouteSnapshot): Observable<boolean> {
        const precondition$ =
            this.stateService.selectedAccountInstance$
                .map((selectedAccount: Account) => {
                    const id: number = +activatedRoute.params['id'];
                    if (selectedAccount.id !== id) {
                        const account: Account = Object.assign(new Account(), {id});
                        this.stateService.dispatch(new AccountsActions.FetchAction(account));
                        return account;
                    }
                    return selectedAccount;
                })
                .do((account: Account) =>
                        this.stateService.dispatch(new TransactionsActions.LoadAction(account)))
                .map(() => true);

        return super.canActivate(activatedRoute)
            .switchMap(
                (authenticated: boolean) => authenticated ? precondition$ : Observable.of(false));
    }

    public constructor(protected stateService: StateService) {
        super(stateService);
    }
}
