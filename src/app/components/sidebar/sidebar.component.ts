import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {delay} from "rxjs/operators";
import {selectIsOpenState} from "../../store/selectors/sidebar.selectors";
import {toggleSidebar} from "../../store/actions/sidebar.actions";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  isOpen$ = this.store.select(selectIsOpenState).pipe(delay(0));
  constructor(private store: Store) { }

  closeSidebar() {
    this.store.dispatch(toggleSidebar());
  }

}
