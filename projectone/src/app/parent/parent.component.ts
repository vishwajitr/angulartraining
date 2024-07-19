import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <app-child (messageEvent)="receiveMessage($event)"></app-child>
    <p>{{ message }}</p>
  `
})
export class ParentComponent {
  message: string = 'asdasd';

  receiveMessage(msg: string) {
    this.message = msg;
  }
}