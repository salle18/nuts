import {Routes} from '@angular/router';

import {AccountsOverviewComponent} from './containers/accounts-overview/accounts-overview.component';
import {TransactionsOverviewComponent} from './containers/transactions-overview/transactions-overview.component';
import {AccountsOverviewGuard, TransactionsOverviewGuard} from './guards';

export const routes: Routes = [
    {path: 'accounts', component: AccountsOverviewComponent, canActivate: [AccountsOverviewGuard]},
    {
      path: 'accounts/:id',
      component: TransactionsOverviewComponent,
      canActivate: [TransactionsOverviewGuard]
    },
    {path: '**', redirectTo: 'accounts'}
];
