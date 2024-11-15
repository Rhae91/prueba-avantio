import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterState } from '@ngrx/router-store';

import * as fromLoaderReducer from './loader.reducer';
import * as sidebarReducer from './sidebar.reducer';

export interface State {
  loader: fromLoaderReducer.State;
  router: RouterState;
  sidebar: sidebarReducer.SidebarState;
}

export const reducers: ActionReducerMap<State> = {
  loader: fromLoaderReducer.reducer,
  router: routerReducer,
  sidebar: sidebarReducer.sidebarReducer
};
