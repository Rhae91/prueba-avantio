import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { LOCALE_ID, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout';
import { AppMenuModule } from './components/menu/app-menu.module';
import { AppPageNotFoundComponent } from './components/page-not-found/app-page-not-found.component';
import { AppProgressBarComponent } from './components/progress-bar/app-progress-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppTrendsModule } from './pages/trends/app-trends.module';
import { httpInterceptorProviders } from './interceptors/app-http-interceptors';
import { reducers } from './store/reducers';

import localeEs from '@angular/common/locales/es';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {NotificationModule} from "./components/notification-container/notification.module";
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    AppProgressBarComponent,
    AppPageNotFoundComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppTrendsModule,
    AppRoutingModule,
    AppLayoutModule,
    AppMenuModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    NotificationModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}, httpInterceptorProviders],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
