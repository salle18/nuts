/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import {compose} from '@ngrx/core/compose';
import * as fromRouter from '@ngrx/router-store';
import {ActionReducer} from '@ngrx/store';
/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import {combineReducers} from '@ngrx/store';
/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import {storeFreeze} from 'ngrx-store-freeze';
import {createSelector} from 'reselect';

import {environment} from '../../environments/environment';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromAccounts from './accounts.reducer';
import * as fromSelectedAccount from './selected-account.reducer';
import * as fromTransactions from './transactions.reducer';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
    accounts: fromAccounts.State;
    selectedAccount: fromSelectedAccount.State;
    transactions: fromTransactions.State;
    router: fromRouter.RouterState;
}


/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
const reducers = {
    accounts: fromAccounts.reducer,
    selectedAccount: fromSelectedAccount.reducer,
    transactions: fromTransactions.reducer,
    router: fromRouter.routerReducer,
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any): State {
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}


/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.booksState$ = state$.select(getBooksState);
 * 	}
 * }
 * ```
 *
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function from the reselect library creates
 * very efficient selectors that are memoized and only recompute when arguments change.
 * The created selectors can also be composed together to select different
 * pieces of state.
 *
 * Just like with the books selectors, we also have to compose the search
 * reducer's and collection reducer's selectors.
 */

/**
 * Accounts
 */

export const getAccountsState = (state: State) => state.accounts;

export const getAccountsLoaded = createSelector(getAccountsState, fromAccounts.getLoaded);
export const getAccountsLoading = createSelector(getAccountsState, fromAccounts.getLoading);
export const getAccountsCollection = createSelector(getAccountsState, fromAccounts.getCollection);

/**
 * Selected account
 */

export const getSelectedAccountState = (state: State) => state.selectedAccount;

export const getSelectedAccountLoaded = createSelector(getSelectedAccountState, fromSelectedAccount.getLoaded);
export const getSelectedAccountLoading = createSelector(getSelectedAccountState, fromSelectedAccount.getLoading);
export const getSelectedAccountInstance = createSelector(getSelectedAccountState, fromSelectedAccount.getInstance);


/**
 * Transactions
 */

export const getTransactionsState = (state: State) => state.transactions;

export const getTransactionsLoaded =
    createSelector(getTransactionsState, fromTransactions.getLoaded);
export const getTransactionsLoading =
    createSelector(getTransactionsState, fromTransactions.getLoading);
export const getTransactionsCollection =
    createSelector(getTransactionsState, fromTransactions.getCollection);
