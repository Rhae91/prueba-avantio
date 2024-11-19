import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { delay } from 'rxjs/operators';

import { selectIsLoadingState } from './store/selectors';
import {SCREEN_SIZES} from "./constants/screen-size.constant";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentDate = Date.now();
  // The delay prevents ExpressionChangedAfterItHasBeenCheckedError
  isLoading$ = this.store.select(selectIsLoadingState).pipe(delay(0));

  constructor(
    private store: Store
  ) {}

  protected readonly SCREEN_SIZES = SCREEN_SIZES;
}
