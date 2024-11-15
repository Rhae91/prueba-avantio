import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromSidebarReducer from '../reducers/sidebar.reducer';

export const selecSidebarState =
  createFeatureSelector<fromSidebarReducer.SidebarState>('sidebar');

export const selectIsOpenState = createSelector(
  selecSidebarState,
  fromSidebarReducer.selectIsOpenState
);
