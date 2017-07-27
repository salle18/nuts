import {AppComponent} from './app/app.component';
import {AccountsOverviewComponent} from './accounts-overview/accounts-overview.component';
import {TransactionsOverviewComponent} from './transactions-overview/transactions-overview.component';

export * from './app/app.component';
export * from './accounts-overview/accounts-overview.component';
export * from './transactions-overview/transactions-overview.component';
export const containers = [AppComponent, AccountsOverviewComponent, TransactionsOverviewComponent];
