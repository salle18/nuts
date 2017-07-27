import './operators';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { reducer } from './reducers';
import {guards} from './guards';
import { routes } from './routes';
import {services} from './services';
import {effects} from './effects';
import {components} from './components';
import { AppComponent, containers } from './containers';

@NgModule({
  declarations: [
      ...containers, ...components
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    ...effects
  ],
  providers: [...services, ...guards],
  bootstrap: [AppComponent]
})
export class AppModule { }
