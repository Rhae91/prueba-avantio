import { createAction, props } from '@ngrx/store';

import { Trend } from '../../models/trend.model';

export const loadTrendsSuccess = createAction(
  '[Trends/API] Load Trends Success',
  props<{ trends: Trend[] }>()
);

export const loadTrendsError = createAction('[Trends/API] Load Trends Error');

export const addTrend = createAction('[Trends List Page] Add Trend', props<{trend: Trend}>());
export const removeTrend = createAction('[Trends List Page] Remove Trend', props<{id:string}>());
export const getOneTrendFromStore = createAction('[Trends List Page]Get one trend from Store', props<{id: string}>());

export const loadOneTrendSuccess = createAction(
  '[Trends/API] Load One Trend Success',
  props<{ trend: Trend }>()
);

export const loadOneTrendError = createAction(
  '[Trends/API] Load One Trend Error'
);
