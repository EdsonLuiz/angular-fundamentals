import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styles: [`
    .container {padding-left: 20px; padding-right: 20px;}
    .event-image {height: 100px;}
  `]
})
export class EventDetailsComponent implements OnInit {

  event: any;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService) { }

  ngOnInit(): void {
    const idParam = parseInt(this.route.snapshot.params['id'])
    this.event = this.eventService.getEventById(idParam);
  }

}
