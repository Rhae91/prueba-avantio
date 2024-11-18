import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new Subject<{ type: "success" | "error"; title: string; message: string; duration: number }>();
  notificationState$ = this.notificationSubject.asObservable();

  constructor() {}

  show(type: 'success' | 'error', title: string, message: string, duration: number = 3000) {
    this.notificationSubject.next({ type, title, message, duration });
  }
}
