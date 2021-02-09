import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <app-navbar></app-navbar>
    <app-events-list></app-events-list>
  `,
  styles: []
})
export class EventsAppComponent {
  title = 'fundamentals';
}
