import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {toggleSidebar} from "../../../../store/actions/sidebar.actions";

@Component({
  selector: 'add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: [ './add-btn.component.scss' ]
})
export class AddBtnComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.store.dispatch(toggleSidebar());
  }

}
