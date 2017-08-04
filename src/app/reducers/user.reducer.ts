import {UserActions} from '../actions';
import {User} from '../models';

export interface State {
    authenticated: boolean;
    loaded: boolean;
    loading: boolean;
    instance: User;
}

const initialState: State = {
    authenticated: true,
    loaded: false,
    loading: false,
    instance: new User()
};

export function reducer(state: State = initialState, action: any): State {
    switch (action.type) {
        case UserActions.AUTHENTICATE:
            return Object.assign({}, state, {authenticated: false, loaded: false, loading: true});
        case UserActions.AUTHENTICATE_SUCCESS:
            return Object.assign(
                {}, state,
                {authenticated: true, loaded: true, loading: false, instance: action.payload});
        case UserActions.AUTHENTICATE_FAIL:
            return Object.assign({}, state, {loading: false});
        default: { return state; }
    }
}

export const getAuthenticated = (state: State) => state.authenticated;

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getInstance = (state: State) => state.instance;
