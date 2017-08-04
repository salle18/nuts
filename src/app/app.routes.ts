import {Routes} from '@angular/router';

import {AccountsOverviewComponent, LoginComponent, TransactionsOverviewComponent} from './containers';
import {AccountsOverviewGuard, LoginGuard, TransactionsOverviewGuard} from './guards';

export const loginRoute = 'login';

export const showAccountsRoute = 'accounts';

export const showTransactionsRoute = 'accounts/:id';

export const routes: Routes = [
    {path: loginRoute, component: LoginComponent, canActivate: [LoginGuard]}, {
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
