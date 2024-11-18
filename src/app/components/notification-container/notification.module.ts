import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from "./notification/notification.component";
import {NotificationContainerComponent} from "./notification-container.component";



@NgModule({
  declarations: [NotificationComponent, NotificationContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NotificationComponent, NotificationContainerComponent
  ]
})
export class NotificationModule { }
