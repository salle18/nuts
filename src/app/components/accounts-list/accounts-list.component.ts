import {Component, EventEmitter, Input, Output, ChangeDetectionStrategy} from '@angular/core';
import {Account} from '../../models';

@Component({
    selector: 'app-accounts-list',
    templateUrl: 'accounts-list.component.html',
    styleUrls: ['accounts-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountsListComponent {
    @Input() public accounts: Account[] = [];

    @Output() public selectAccount: EventEmitter<Account> = new EventEmitter<Account>();

    public onSelectAccount(account: Account): void {
        this.selectAccount.emit(account);
    }
}
