import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {AccountsActions} from '../actions';
import {StateService} from '../services';

@Injectable()
export class AccountsOverviewGuard implements CanActivate {
    public canActivate(): Observable<boolean> {
        return this.stateService.accountsLoaded$.take(1)
            .do(loaded => loaded || this.stateService.dispatch(new AccountsActions.LoadAction()))
            .map(() => true);
    }

    public constructor(private stateService: StateService) {}
}
