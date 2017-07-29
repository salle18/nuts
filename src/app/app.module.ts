import './operators';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {RouterStoreModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {TranslateModule} from '@ngx-translate/core';

import {components} from './components';
import {translateConfig, translateInitializerProvider} from './config';
import {AppComponent, containers} from './containers';
import {effects} from './effects';
import {guards} from './guards';
import {MaterialModule} from './material.module';
import {reducer} from './reducers';
import {routes} from './routes';
import {services} from './services';


@NgModule({
    declarations: [...containers, ...components],
    imports: [
        BrowserModule, HttpClientModule, RouterModule.forRoot(routes), BrowserAnimationsModule,
        MaterialModule, StoreModule.provideStore(reducer), RouterStoreModule.connectRouter(),
        StoreDevtoolsModule.instrumentOnlyWithExtension(), TranslateModule.forRoot(translateConfig),
        ...effects
    ],
    providers: [...services, ...guards, translateInitializerProvider],
    bootstrap: [AppComponent]
})
export class AppModule {
}
