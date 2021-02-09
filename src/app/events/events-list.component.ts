import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  template: `
    <div>
      <h1>Upcomming Angular Events</h1>
      <hr>
      <app-event-thumbnail 
        [event]="event" ></app-event-thumbnail> 
    </div>
  `,
  styles: [
  ]
})
export class EventsListComponent implements OnInit {

  event = {
    id: 1,
    name: 'Angular connect',
    date: '9/26/2036',
    time: '10:00am',
    price: 599.99,
    imageUrl : 'src/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England',
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
