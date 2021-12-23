import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  showMessage(element: string, message: string): void {
    const toastMsg = document.getElementById(element);
    if (toastMsg) {
      toastMsg.className = 'show';
      toastMsg.textContent = message;
    }
  }

  cleanMessage(element: string, message: string): void {
    const toastMsg = document.getElementById(element);
    if (toastMsg) {
      toastMsg.className = 'hide';
      toastMsg.textContent = '';
    }
  }
}
