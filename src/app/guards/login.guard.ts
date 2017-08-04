import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {go} from '@ngrx/router-store';
import {Observable} from 'rxjs/Observable';

import {showAccountsRoute} from '../app.routes';
import {StateService} from '../services';
import {negation} from '../utils';

@Injectable()
export class LoginGuard implements CanActivate {
    public canActivate(): Observable<boolean> {
        return this.stateService.userAuthenticated$
            .do((authenticated: boolean) =>
                    !authenticated || this.stateService.dispatch(go(showAccountsRoute)))
            .map(negation);
    }

    public constructor(private stateService: StateService) {}
}
