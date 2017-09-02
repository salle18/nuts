import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {go} from '@ngrx/router-store';

import {UserActions} from '../actions';
import {showAccountsRoute, loginRoute} from "../app.routes";
import {User, Message} from '../models';
import {ApiService} from '../services';

@Injectable()
export class UserEffects {

    @Effect()
    public authenticate$: Observable<Action> =
        this.actions$.ofType(UserActions.AUTHENTICATE)
            .switchMap(
                (user: User) => this.apiService.authenticate(user)
                    .map(
                        (authenticatedUser: User) =>
                            new UserActions.AuthenticateSuccessAction(authenticatedUser))
                    .catch(() => Observable.of(new UserActions.AuthenticateFailAction(user))));

    @Effect()
    public authenticateSuccess$: Observable<Action> =
        this.actions$.ofType(UserActions.AUTHENTICATE_SUCCESS)
            .map(() => go(showAccountsRoute));

    @Effect()
    public authenticateFail$: Observable<Action> =
        this.actions$.ofType(UserActions.AUTHENTICATE_FAIL)
            .map(() => go(showAccountsRoute));

    @Effect()
    public logout$: Observable<Action> =
        this.actions$.ofType(UserActions.LOGOUT)
            .map(() => go(loginRoute));
    
    public constructor(private actions$: Actions, private apiService: ApiService) {}
}
