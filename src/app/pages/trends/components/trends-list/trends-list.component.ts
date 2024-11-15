import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { loadTrends } from '../../store/actions/trends-list-page.actions';
import { selectTrendsByProvider } from '../../store/selectors';
import {selectIsOpenState} from "../../../../store/selectors";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-trends-list',
  templateUrl: './trends-list.component.html',
  styleUrls: ['./trends-list.component.scss'],
})
export class TrendsListComponent implements OnInit {
  protected showButton$ = this.store.select(selectIsOpenState).pipe(delay(0));
  protected trends$ = this.store.select(selectTrendsByProvider);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadTrends());
  }
}
