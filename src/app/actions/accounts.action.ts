import {Action} from '@ngrx/store';
import {Account, Transaction} from '../models';

export namespace AccountsActions {

    const CATEGORY = 'Account';

    export const LOAD = `[${CATEGORY}] Load`;
    export const LOAD_SUCCESS = `[${CATEGORY}] Load Success`;
    export const LOAD_FAIL = `[${CATEGORY}] Load Fail`;
    export const ADD = `[${CATEGORY}] Add`;
    export const ADD_SUCCESS = `[${CATEGORY}] Add Success`;
    export const ADD_FAIL = `[${CATEGORY}] Add Fail`;
    export const UPDATE = `[${CATEGORY}] Update`;
    export const UPDATE_SUCCESS = `[${CATEGORY}] Update Success`;
    export const UPDATE_FAIL = `[${CATEGORY}] Update Fail`;
    export const REMOVE = `[${CATEGORY}] Remove`;
    export const REMOVE_SUCCESS = `[${CATEGORY}] Remove Success`;
    export const REMOVE_FAIL = `[${CATEGORY}] Remove Fail`;
    export const SELECT = `[${CATEGORY}] Select`;

    export class LoadAction implements Action {
        readonly type = LOAD;
    }

    export class LoadSuccessAction implements Action {
        readonly type = LOAD_SUCCESS;

        constructor(public payload: Account[]) { }
    }

    export class LoadFailAction implements Action {
        readonly type = LOAD_FAIL;
    }

    export class AddAction implements Action {
        readonly type = ADD;

        constructor(public payload: Account) { }
    }

    export class AddSuccessAction implements Action {
        readonly type = ADD_SUCCESS;

        constructor(public payload: Account) { }
    }

    export class AddFailAction implements Action {
        readonly type = ADD_FAIL;

        constructor(public payload: Account) { }
    }

    export class UpdateAction implements Action {
        readonly type = UPDATE;

        constructor(public payload: Account) { }
    }

    export class UpdateSuccessAction implements Action {
        readonly type = UPDATE_SUCCESS;

        constructor(public payload: Account) { }
    }

    export class UpdateFailAction implements Action {
        readonly type = UPDATE_FAIL;

        constructor(public payload: Account) { }
    }

    export class RemoveAction implements Action {
        readonly type = REMOVE;

        constructor(public payload: Account) { }
    }

    export class RemoveSuccessAction implements Action {
        readonly type = REMOVE_SUCCESS;

        constructor(public payload: Account) { }
    }

    export class RemoveFailAction implements Action {
        readonly type = REMOVE_FAIL;

        constructor(public payload: Account) { }
    }

    export class SelectAction implements Action {
        readonly type = SELECT;

        constructor(public payload: Account) { }
    }

}
