import './operators';

import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {RouterStoreModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {components} from './components';
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
        BrowserModule, HttpModule, RouterModule.forRoot(routes), BrowserAnimationsModule,
        MaterialModule, StoreModule.provideStore(reducer), RouterStoreModule.connectRouter(),
        StoreDevtoolsModule.instrumentOnlyWithExtension(), ...effects
    ],
    providers: [...services, ...guards],
    bootstrap: [AppComponent]
})
export class AppModule {
}
