import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list.component';
import { Routes } from "@angular/router";

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'events' }
]