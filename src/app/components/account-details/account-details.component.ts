import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {Account} from '../../models';

@Component({selector: 'app-account-details', templateUrl: 'account-details.component.html', changeDetection: ChangeDetectionStrategy.OnPush})
export class AccountDetailsComponent {
    @Input() public account: Account = new Account();
}
