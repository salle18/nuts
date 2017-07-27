import {TransactionActions} from '../actions';
import {Transaction} from "../models";

export interface State {
    loaded: boolean;
    loading: boolean;
    collection: Transaction[];
}

const initialState: State = {
    loaded: false,
    loading: false,
    collection: []
};

export function reducer(state = initialState, action: any): State {
    switch (action.type) {
        case TransactionActions.LOAD:
            return Object.assign({}, state, {
                loading: true
            });
        case TransactionActions.LOAD_SUCCESS:
            return Object.assign({}, state, {
                loaded: true,
                loading: false,
                collection: action.payload
            });
        case TransactionActions.LOAD_FAIL:
            return Object.assign({}, state, {
                loading: false
            });
        default: {
            return state;
        }
    }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getCollection = (state: State) => state.collection;
