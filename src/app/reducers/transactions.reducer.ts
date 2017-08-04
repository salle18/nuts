import {TransactionsActions} from '../actions';
import {Transaction} from '../models';

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

export function reducer(state: State = initialState, action: any): State {
    switch (action.type) {
        case TransactionsActions.LOAD:
            return Object.assign({}, state, {loaded: false, loading: true});
        case TransactionsActions.LOAD_SUCCESS:
            return Object.assign(
                {}, state, {loaded: true, loading: false, collection: action.payload});
        case TransactionsActions.LOAD_FAIL:
            return Object.assign({}, state, {loading: false});
        default: { return state; }
    }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getCollection = (state: State) => state.collection;
