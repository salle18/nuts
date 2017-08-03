import {Routes} from '@angular/router';

import {AccountsOverviewComponent} from './containers/accounts-overview/accounts-overview.component';
import {TransactionsOverviewComponent} from './containers/transactions-overview/transactions-overview.component';
import {AccountsOverviewGuard, TransactionsOverviewGuard} from './guards';

export const showAccountsRoute = 'accounts';

export const showTransactionsRoute = 'accounts/:id';

export const routes: Routes = [
    {
      path: showAccountsRoute,
      component: AccountsOverviewComponent,
      canActivate: [AccountsOverviewGuard]
    },
    {
      path: showTransactionsRoute,
      component: TransactionsOverviewComponent,
      canActivate: [TransactionsOverviewGuard]
    },
    {path: '**', redirectTo: showAccountsRoute}
];
