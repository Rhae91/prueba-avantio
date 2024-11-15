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
  editForm: boolean = false;
  trendsForm: FormGroup;
  routeSubs: Subscription | undefined;

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.trendsForm = this.formBuilder.group({
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
        console.log(this.trendsForm.value);
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
    this.store.dispatch(toggleSidebar());
  }

}
