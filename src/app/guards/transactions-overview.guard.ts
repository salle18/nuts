import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {AccountsActions, TransactionActions} from '../actions';
import {StateService} from '../services';
import {Account} from '../models';

@Injectable()
export class TransactionsOverviewGuard implements CanActivate {
    public canActivate(activatedRoute: ActivatedRouteSnapshot): Observable<boolean> {
        return this.stateService.selectedAccountInstance$.map((selectedAccount: Account) => {
            const id: number = +activatedRoute.params['id'];
            if (selectedAccount.id !== id) {
                const account: Account = Object.assign(new Account(), {id});
                this.stateService.dispatch(new AccountsActions.FetchAction(account));
                return account;
            }
            return selectedAccount;
        }).do((account: Account) => this.stateService.dispatch(new TransactionActions.LoadAction(account))).map(() => true);
    }

    public constructor(private stateService: StateService) {}
}
