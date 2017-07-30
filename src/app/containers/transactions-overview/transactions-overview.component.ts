import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Account, Transaction} from '../../models';
import {StateService} from '../../services';

@Component(
    {selector: 'app-transactions-overview', templateUrl: 'transactions-overview.component.html'})
export class TransactionsOverviewComponent implements OnInit {
    public selectedAccount$: Observable<Account>;

    public selectedAccountLoading$: Observable<boolean>;

    public transactions$: Observable<Transaction[]>;

    public transactionsLoading$: Observable<boolean>;

    public constructor(private stateService: StateService) {}

    public ngOnInit(): void {
        this.selectedAccount$ = this.stateService.selectedAccountInstance$;
        this.selectedAccountLoading$ = this.stateService.selectedAccountLoading$;
        this.transactions$ = this.stateService.transactionsCollection$;
        this.transactionsLoading$ = this.stateService.transactionsLoading$;
    }
}
