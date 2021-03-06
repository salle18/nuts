import {Component, Input} from '@angular/core';
import {Account} from '../../models';

@Component({selector: 'app-account-details', templateUrl: 'account-details.component.html'})
export class AccountDetailsComponent {
    @Input() public account: Account = new Account();
}
