import {AccountsActions} from '../actions';
import {Account} from '../models';

export interface State {
    loaded: boolean;
    loading: boolean;
    instance: Account;
}

const initialState: State = {
    loaded: false,
    loading: false,
    instance: new Account()
};

export function reducer(state: State = initialState, action: any): State {
    switch (action.type) {
        case AccountsActions.FETCH:
            return Object.assign({}, state, {loaded: false, loading: true});
        case AccountsActions.FETCH_FAIL:
            return Object.assign({}, state, {loading: false});
        case AccountsActions.FETCH_SUCCESS:
            return Object.assign({}, state, {loaded: true, loading: false});
        case AccountsActions.SELECT:
            return Object.assign(
                {}, state, {loaded: true, loading: false, instance: action.payload});
        default: { return state; }
    }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getInstance = (state: State) => state.instance;
