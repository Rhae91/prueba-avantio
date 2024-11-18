import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @Input() type: 'success'|  'error' = 'success';
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() duration: number = 3000;

  show: boolean = false;

  ngOnInit() {
    this.show = true;

    setTimeout(() => {
      this.show = false;
    }, this.duration);
  }
}
