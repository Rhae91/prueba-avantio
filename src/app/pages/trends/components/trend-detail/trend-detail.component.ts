import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectSelectedTrend } from '../../store/selectors';
import {TrendService} from "../../services/trend.service";
import {toggleSidebar} from "../../../../store/actions/sidebar.actions";
import {loadOneTrendError} from "../../store/actions/trends-api.actions";
import {NotificationService} from "../../../../services/notification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-trend-detail',
  templateUrl: './trend-detail.component.html',
  styleUrls: ['./trend-detail.component.scss'],
})
export class TrendDetailComponent {
  protected trend$ = this.store.select(selectSelectedTrend);

  constructor(private store: Store, private trendService: TrendService, private notificationService: NotificationService, private router: Router) {}

  deleteTrend(trendId: string) {
    this.trendService.deleteOne(trendId).subscribe(() => {
      this.notificationService.show('error','Trend Eliminado','La noticia ha sido eliminada con exito.')
      this.store.dispatch(loadOneTrendError());
      this.router.navigate(['/trends']);
    });
  }

  editTrend() {
    this.store.dispatch(toggleSidebar());
  }

  clearTrend() {
    this.store.dispatch(loadOneTrendError());
  }
}
