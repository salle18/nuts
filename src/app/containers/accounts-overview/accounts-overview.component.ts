import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {AccountsActions} from '../../actions';
import {Account} from '../../models';
import {StateService} from '../../services';

@Component({selector: 'app-accounts-overview', templateUrl: 'accounts-overview.component.html'})
export class AccountsOverviewComponent implements OnInit {
    public accounts$: Observable<Account[]>;

    public accountsLoading$: Observable<boolean>;

    public constructor(private stateService: StateService) {}

    public ngOnInit(): void {
        this.accounts$ = this.stateService.accountsCollection$;
        this.accountsLoading$ = this.stateService.accountsLoading$;
    }

    public onSelectAccount(account: Account): void {
        this.stateService.dispatch(new AccountsActions.SelectAction(account));
    }
}
