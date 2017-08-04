import {Action} from '@ngrx/store';
import {User} from '../models';

export namespace UserActions {
    const CATEGORY = 'User';

    export const AUTHENTICATE = `[${CATEGORY}] Authenticate`;
    export const AUTHENTICATE_SUCCESS = `[${CATEGORY}] Authenticate Success`;
    export const AUTHENTICATE_FAIL = `[${CATEGORY}] Authenticate Fail`;

    export class AuthenticateAction implements Action {
        public readonly type: string = AUTHENTICATE;

        public constructor(public payload: User) {}
    }

    export class AuthenticateSuccessAction implements Action {
        public readonly type: string = AUTHENTICATE_SUCCESS;

        public constructor(public payload: User) {}
    }

    export class AuthenticateFailAction implements Action {
        public readonly type: string = AUTHENTICATE_FAIL;

        public constructor(public payload: User) {}
    }
}
