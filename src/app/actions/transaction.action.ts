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
        public readonly type: string = LOAD;

        public constructor(public payload: Account) {}
    }

    export class LoadSuccessAction implements Action {
        public readonly type: string = LOAD_SUCCESS;

        public constructor(public payload: Transaction[]) {}
    }

    export class LoadFailAction implements Action {
        public readonly type: string = LOAD_FAIL;

        public constructor(public payload: Account) {}
    }

    export class AddAction implements Action {
        public readonly type: string = ADD;

        public constructor(public payload: Transaction) {}
    }

    export class AddSuccessAction implements Action {
        public readonly type: string = ADD_SUCCESS;

        public constructor(public payload: Transaction) {}
    }

    export class AddFailAction implements Action {
        public readonly type: string = ADD_FAIL;

        public constructor(public payload: Transaction) {}
    }

    export class UpdateAction implements Action {
        public readonly type: string = UPDATE;

        public constructor(public payload: Transaction) {}
    }

    export class UpdateSuccessAction implements Action {
        public readonly type: string = UPDATE_SUCCESS;

        public constructor(public payload: Transaction) {}
    }

    export class UpdateFailAction implements Action {
        public readonly type: string = UPDATE_FAIL;

        public constructor(public payload: Transaction) {}
    }

    export class RemoveAction implements Action {
        public readonly type: string = REMOVE;

        public constructor(public payload: Transaction) {}
    }

    export class RemoveSuccessAction implements Action {
        public readonly type: string = REMOVE_SUCCESS;

        public constructor(public payload: Transaction) {}
    }

    export class RemoveFailAction implements Action {
        public readonly type: string = REMOVE_FAIL;

        public constructor(public payload: Transaction) {}
    }
}
