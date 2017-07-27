import {AccountsOverviewGuard} from './accounts-overview.guard';
import {TransactionsOverviewGuard} from './transactions-overview.guard';

export {AccountsOverviewGuard} from './accounts-overview.guard';
export {TransactionsOverviewGuard} from './transactions-overview.guard';

export const guards = [AccountsOverviewGuard, TransactionsOverviewGuard];
