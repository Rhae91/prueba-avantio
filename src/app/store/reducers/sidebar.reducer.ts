import { createReducer, on } from '@ngrx/store';

import * as SidebarActions from '../actions/sidebar.actions';

export interface SidebarState {
  isOpen: boolean;
}

export const initialSidebarState: SidebarState = {
  isOpen: false,
};


export const sidebarReducer = createReducer(
  initialSidebarState,
  on(SidebarActions.toggleSidebar, (state): SidebarState => ({ ...state, isOpen: true })),
);

