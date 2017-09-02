import {Observable} from 'rxjs/Observable';

import {paginatedTestTransactions, testAccount1, testAccounts, testUser} from '../../fixtures';

export class ApiServiceMock {
    public loadAccounts(): any {
        return Observable.of(testAccounts);
    }

    public fetchAccount(): any {
        return Observable.of(testAccount1);
    }

    public loadTransactions(): any {
        return Observable.of(paginatedTestTransactions);
    }
    
    public authenticate(): any {
        return Observable.of(testUser);
    }
}
