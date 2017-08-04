import {Observable} from 'rxjs/Observable';

import {paginatedTestTransactions, testAccount1, testAccounts} from '../../fixtures';

export class ApiServiceMock {
    public loadAccounts(): any {
        return Observable.of(testAccounts);
    }

    public fetchAccount(account: Account): any {
        return Observable.of(testAccount1);
    }

    public loadTransactions(account: Account): any {
        return Observable.of(paginatedTestTransactions);
    }
}
