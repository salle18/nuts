import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {Account, Transaction} from '../models';
import * as fromRoot from '../reducers';

@Injectable()
export class StateService {
    public accountsLoaded$: Observable<boolean> = this.store.select(fromRoot.getAccountsLoaded);

    public accountsLoading$: Observable<boolean> = this.store.select(fromRoot.getAccountsLoading);

    public accountsCollection$: Observable<Account[]> =
        this.store.select(fromRoot.getAccountsCollection);

    public accountsSelectedAccount$: Observable<Account> =
        this.store.select(fromRoot.getAccountsSelectedAccount);

    public transactionsLoaded$: Observable<boolean> =
        this.store.select(fromRoot.getTransactionsLoaded);

    public transactionsLoading$: Observable<boolean> =
        this.store.select(fromRoot.getTransactionsLoading);

    public transactionsCollection$: Observable<Transaction[]> =
        this.store.select(fromRoot.getTransactionsCollection);

    public dispatch(action: Action): void {
        this.store.dispatch(action);
    }

    public constructor(private store: Store<fromRoot.State>) {}
}
