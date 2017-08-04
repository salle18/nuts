import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import {go} from '@ngrx/router-store';
import {Observable} from 'rxjs/Observable';

import {loginRoute} from '../app.routes';
import {StateService} from '../services';
import {identity} from '../utils';

@Injectable()
export class AuthGuard implements CanActivate {
    public canActivate(activatedRoute: ActivatedRouteSnapshot): Observable<boolean> {
        return this.stateService.userAuthenticated$.take(1)
            .do((authenticated: boolean) =>
                    authenticated || this.stateService.dispatch(go(loginRoute)))
            .map(identity);
    }

    public constructor(protected stateService: StateService) {}
}
