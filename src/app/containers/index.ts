import {AccountsOverviewComponent} from './accounts-overview/accounts-overview.component';
import {AppComponent} from './app/app.component';
import {LoginComponent} from './login/login.component';
import {TransactionsOverviewComponent} from './transactions-overview/transactions-overview.component';

export * from './accounts-overview/accounts-overview.component';
export * from './app/app.component';
export * from './login/login.component';
export * from './transactions-overview/transactions-overview.component';
export const containers = [AccountsOverviewComponent, AppComponent, LoginComponent, TransactionsOverviewComponent];
