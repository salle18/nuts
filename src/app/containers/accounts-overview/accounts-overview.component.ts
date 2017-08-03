import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {go} from '@ngrx/router-store';
import {Observable} from 'rxjs/Observable';

import {AccountsActions} from '../../actions';
import {Account} from '../../models';
import {StateService} from '../../services';

@Component({selector: 'app-accounts-overview', templateUrl: 'accounts-overview.component.html', changeDetection: ChangeDetectionStrategy.OnPush})
export class AccountsOverviewComponent implements OnInit {
    public accounts$: Observable<Account[]>;

    public accountsLoading$: Observable<boolean>;

    public accountsLoaded$: Observable<boolean>;

    public constructor(private stateService: StateService) {}

    public ngOnInit(): void {
        this.accounts$ = this.stateService.accountsCollection$;
        this.accountsLoading$ = this.stateService.accountsLoading$;
        this.accountsLoaded$ = this.stateService.accountsLoaded$;
    }

    public onSelectAccount(account: Account): void {
        this.stateService.dispatch(new AccountsActions.SelectAction(account));
        this.stateService.dispatch(go(`accounts/${account.id}`));
    }
}
