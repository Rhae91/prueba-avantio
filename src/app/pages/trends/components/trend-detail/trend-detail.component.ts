import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectSelectedTrend } from '../../store/selectors';
import {TrendService} from "../../services/trend.service";

@Component({
  selector: 'app-trend-detail',
  templateUrl: './trend-detail.component.html',
  styleUrls: ['./trend-detail.component.scss'],
})
export class TrendDetailComponent {
  protected trend$ = this.store.select(selectSelectedTrend);

  constructor(private store: Store, private trendService: TrendService) {}

  deleteTrend(trendId: string) {
    this.trendService.deleteOne(trendId).subscribe(r => console.log(r));
  }
}
