import {Action} from '@ngrx/store';
import {Account, Transaction} from '../models';

export namespace TransactionActions {

    const CATEGORY = 'Transaction';

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

    export class LoadAction implements Action {
        readonly type = LOAD;

        constructor(public payload: Account) { }
    }

    export class LoadSuccessAction implements Action {
        readonly type = LOAD_SUCCESS;

        constructor(public payload: Transaction[]) { }
    }

    export class LoadFailAction implements Action {
        readonly type = LOAD_FAIL;

        constructor(public payload: Account) {}
    }

    export class AddAction implements Action {
        readonly type = ADD;

        constructor(public payload: Transaction) { }
    }

    export class AddSuccessAction implements Action {
        readonly type = ADD_SUCCESS;

        constructor(public payload: Transaction) { }
    }

    export class AddFailAction implements Action {
        readonly type = ADD_FAIL;

        constructor(public payload: Transaction) { }
    }

    export class UpdateAction implements Action {
        readonly type = UPDATE;

        constructor(public payload: Transaction) { }
    }

    export class UpdateSuccessAction implements Action {
        readonly type = UPDATE_SUCCESS;

        constructor(public payload: Transaction) { }
    }

    export class UpdateFailAction implements Action {
        readonly type = UPDATE_FAIL;

        constructor(public payload: Transaction) { }
    }

    export class RemoveAction implements Action {
        readonly type = REMOVE;

        constructor(public payload: Transaction) { }
    }

    export class RemoveSuccessAction implements Action {
        readonly type = REMOVE_SUCCESS;

        constructor(public payload: Transaction) { }
    }

    export class RemoveFailAction implements Action {
        readonly type = REMOVE_FAIL;

        constructor(public payload: Transaction) { }
    }

}
