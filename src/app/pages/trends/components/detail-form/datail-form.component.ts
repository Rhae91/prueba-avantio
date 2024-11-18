import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {toggleSidebar} from "../../../../store/actions/sidebar.actions";
import {Store} from "@ngrx/store";
import {selectSelectedTrend} from "../../store/selectors";
import {Subscription} from "rxjs";
import {NotificationService} from "../../../../services/notification.service";
import {addTrend} from "../../store/actions/trends-api.actions";
import {Trend} from "../../models/trend.model";
import {TrendService} from "../../services/trend.service";
import {Router} from "@angular/router";
import {loadTrends} from "../../store/actions/trends-list-page.actions";

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent implements OnInit, OnDestroy {

  title: string = 'Nuevo Trend';
  editForm: boolean = false;
  trendsForm: FormGroup;
  routeSubs: Subscription | undefined;

  constructor(private formBuilder: FormBuilder,
              private store: Store,
              private notificationService: NotificationService,
              private trendService: TrendService,
              private router: Router) {
    this.trendsForm = this.formBuilder.group({
      id: [''],
      title: ['', Validators.required],
      body: ['', Validators.required],
      url: ['', Validators.required],
      image: ['', Validators.required],
      provider: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.store.select(selectSelectedTrend).subscribe(trend => {
      if (trend) {
        this.title = 'Editar Trend';
        this.editForm = true;
        this.trendsForm.patchValue(trend);
      } else {
        this.editForm = false;
        this.title = 'Nuevo Trend';
        this.trendsForm.reset();
      }
    })
  }

  ngOnDestroy() {
    if (this.routeSubs) this.routeSubs.unsubscribe();
  }

  cancelForm() {
    if (!this.editForm) this.trendsForm.reset();
    this.store.dispatch(toggleSidebar())
  }

  submitForm() {
    const title = this.editForm ? 'Trend Editada' : 'Trend Creada';
    const message = this.editForm ? 'La noticia fue editada con exito' : 'La noticia fue creada con exito';
    const id = this.trendsForm.value.id;
    const newTrend = new Trend(this.trendsForm.value);
    if (this.editForm) {
      this.trendService.modifyOne(newTrend, id).subscribe(() => {
        this.notificationService.show("success",title,message);
        this.trendsForm.reset();
        this.router.navigate(['/trends'])
      });
    } else {
      this.trendService.createOne(newTrend).subscribe(() => {
        this.notificationService.show("success",title,message);
        this.store.dispatch(loadTrends());
      });
    }
    this.store.dispatch(toggleSidebar());
  }

}
