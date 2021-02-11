import { EventService } from "./shared/event.service";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from "../common/toastr.service";


@Component({
  selector: "app-events-list",
  template: `
    <div>
      <h1>Upcomming Angular Events</h1>
      <hr />
      <div class="row">
        <div class="col-md-6" *ngFor="let event of events">
          <app-event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></app-event-thumbnail>
        </div>
      </div>
    </div>
  `,
  styles: [``],
})
export class EventsListComponent implements OnInit {
  events: any;

  constructor(
    private toastrService: ToastrService,
    private eventService: EventService) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName: string): void {
    this.toastrService.success(eventName);
  }
}
