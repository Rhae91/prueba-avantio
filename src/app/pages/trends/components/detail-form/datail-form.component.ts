import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent implements OnInit {

  title: string = 'Nuevo Trend';
  trendsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.trendsForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      url: ['', [Validators.required, Validators.pattern('https?://.+')]],
      image: ['', Validators.required, Validators.pattern('https?://.+')],
      provider: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
