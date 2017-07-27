import {Component, OnInit} from '@angular/core';
import {StateService} from "../../services";
import {Observable} from "rxjs/Observable";
import {Account, Transaction} from "../../models";

@Component({
    selector: 'app-transactions-overview',
    templateUrl: 'transactions-overview.component.html'
})
export class TransactionsOverviewComponent implements OnInit {

    public selectedAccount$: Observable<Account>;

    public transactions$: Observable<Transaction[]>;

    public transactionsLoading$: Observable<boolean>;

    public constructor(private stateService: StateService) {}

    public ngOnInit(): void {
        this.selectedAccount$ = this.stateService.accountsSelectedAccount$;
        this.transactions$ = this.stateService.transactionsCollection$;
        this.transactionsLoading$ = this.stateService.transactionsLoading$;
    }
}
