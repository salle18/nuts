import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {AccountsActions} from '../actions';
import {StateService} from '../services';
import {AuthGuard} from './auth.guard';

@Injectable()
export class AccountsOverviewGuard extends AuthGuard implements CanActivate {
    public canActivate(activatedRoute: ActivatedRouteSnapshot): Observable<boolean> {
        const precondition$ =
            this.stateService.accountsLoaded$
                .do(loaded =>
                        loaded || this.stateService.dispatch(new AccountsActions.LoadAction()))
                .map(() => true);
        return super.canActivate(activatedRoute)
            .switchMap(
                (authenticated: boolean) => authenticated ? precondition$ : Observable.of(false));
    }

    public constructor(protected stateService: StateService) {
        super(stateService);
    }
}
