import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppTrendsRoutingModule } from './app-trends-routing.module';
import { AuthInterceptor } from '../../interceptors/auth-interceptor';
import { TrendDetailComponent } from './components/trend-detail/trend-detail.component';
import { TrendService } from './services/trend.service';
import { TrendsListComponent } from './components/trends-list/trends-list.component';
import { trendsEffects } from './store/effects';
import { trendsFeatureKey, trendsReducer } from './store/reducers';
import {AddBtnComponent} from "./components/add-btn/add-btn.component";
import {DetailFormComponent} from "./components/detail-form/datail-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [TrendsListComponent, TrendDetailComponent, AddBtnComponent, DetailFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppTrendsRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(trendsFeatureKey, trendsReducer),
    EffectsModule.forFeature(trendsEffects),
  ],
  exports: [TrendsListComponent, DetailFormComponent],
  providers: [
    TrendService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class AppTrendsModule {}
