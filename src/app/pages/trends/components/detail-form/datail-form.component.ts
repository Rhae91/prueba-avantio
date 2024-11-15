import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {toggleSidebar} from "../../../../store/actions/sidebar.actions";
import {Store} from "@ngrx/store";
import {selectSelectedTrend} from "../../store/selectors";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent implements OnInit, OnDestroy {

  title: string = 'Nuevo Trend';
  trendsForm: FormGroup;
  routeSubs: Subscription | undefined;

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.trendsForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      url: ['', [Validators.required, Validators.pattern('https?://.+')]],
      image: ['', Validators.required, Validators.pattern('https?://.+')],
      provider: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.store.select(selectSelectedTrend).subscribe(trend => {
      if (trend) {
        this.title = 'Editar Trend';
        console.log(trend);
        this.trendsForm.patchValue(trend);
      } else {
        this.title = 'Nuevo Trend';
      }
    })
  }

  ngOnDestroy() {
    if (this.routeSubs) this.routeSubs.unsubscribe();
  }

  cancelForm() {
    this.trendsForm.reset();
    this.store.dispatch(toggleSidebar())
  }

  submitForm() {
    this.store.dispatch(toggleSidebar());
  }

}
