import {AccountsActions} from '../actions';
import {Account} from "../models";

export interface State {
    loaded: boolean;
    loading: boolean;
    collection: Account[];
    selectedAccount: Account;
}

const initialState: State = {
    loaded: false,
    loading: false,
    collection: [],
    selectedAccount: new Account()
};

export function reducer(state = initialState, action: any): State {
    switch (action.type) {
        case AccountsActions.SELECT:
            return Object.assign({}, state, {
                selectedAccount: action.payload
            });
        case AccountsActions.LOAD:
            return Object.assign({}, state, {
                loading: true
            });
        case AccountsActions.LOAD_SUCCESS:
            return Object.assign({}, state, {
                loaded: true,
                loading: false,
                collection: action.payload
            });
        case AccountsActions.LOAD_FAIL:
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

export const getSelectedAccount = (state: State) => state.selectedAccount;
