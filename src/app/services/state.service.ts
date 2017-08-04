import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {Account, Transaction, User} from '../models';
import * as fromRoot from '../reducers';

@Injectable()
export class StateService {
    /**
     * Accounts
     */

    public accountsLoaded$: Observable<boolean> = this.store.select(fromRoot.getAccountsLoaded);

    public accountsLoading$: Observable<boolean> = this.store.select(fromRoot.getAccountsLoading);

    public accountsCollection$: Observable<Account[]> =
        this.store.select(fromRoot.getAccountsCollection);

    /**
     * Selected account
     */

    public selectedAccountLoaded$: Observable<boolean> =
        this.store.select(fromRoot.getSelectedAccountLoaded);

    public selectedAccountLoading$: Observable<boolean> =
        this.store.select(fromRoot.getSelectedAccountLoading);

    public selectedAccountInstance$: Observable<Account> =
        this.store.select(fromRoot.getSelectedAccountInstance);

    /**
     * Transactions
     */

    public transactionsLoaded$: Observable<boolean> =
        this.store.select(fromRoot.getTransactionsLoaded);

    public transactionsLoading$: Observable<boolean> =
        this.store.select(fromRoot.getTransactionsLoading);

    public transactionsCollection$: Observable<Transaction[]> =
        this.store.select(fromRoot.getTransactionsCollection);

    /**
     * User
     */

    public userAuthenticated$: Observable<boolean> =
        this.store.select(fromRoot.getUserAuthenticated);

    public userLoaded$: Observable<boolean> = this.store.select(fromRoot.getUserLoaded);

    public userLoading$: Observable<boolean> = this.store.select(fromRoot.getUserLoading);

    public userInstance$: Observable<User> = this.store.select(fromRoot.getUserInstance);

    public constructor(private store: Store<fromRoot.State>) {}

    public dispatch(action: Action): void {
        if (action) {
            this.store.dispatch(action);
        }
    }
}
