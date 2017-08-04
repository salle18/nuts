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

import {routes} from './app.routes';
import {components} from './components';
import {AppComponent, containers} from './containers';
import {effects} from './effects';
import {entryComponents} from './entry-components';
import {guards} from './guards';
import {MaterialModule} from './material.module';
import {providers, translateConfigProvider} from './providers';
import {reducer} from './reducers';
import {services} from './services';

@NgModule({
    declarations: [...containers, ...components, ...entryComponents],
    entryComponents: [...entryComponents],
    imports: [
        BrowserModule, HttpClientModule, RouterModule.forRoot(routes), BrowserAnimationsModule,
        MaterialModule, StoreModule.provideStore(reducer), RouterStoreModule.connectRouter(),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        TranslateModule.forRoot(translateConfigProvider), ...effects
    ],
    providers: [...services, ...guards, ...providers],
    bootstrap: [AppComponent]
})
export class AppModule {
}
