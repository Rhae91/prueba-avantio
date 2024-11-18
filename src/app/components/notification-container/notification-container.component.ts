import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification-container',
  templateUrl: './notification-container.component.html',
  styleUrls: ['./notification-container.component.scss']
})
export class NotificationContainerComponent implements OnInit {
  notifications: Array<{ type: "error" | "success"; title: string; message: string; duration: number }> = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.notificationState$.subscribe(notification => {
      this.notifications.push(notification);

      // Remover la notificación después de la duración especificada
      setTimeout(() => {
        this.notifications.shift();
      }, notification.duration);
    });
  }
}
