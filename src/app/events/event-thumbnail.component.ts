import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  template: `
  <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
    <div>Date: {{event.date}}</div>
    <div [ngStyle]="getStartLate()" [ngClass]="applyClass()" [ngSwitch]="event?.time">
      Time: {{event?.time}}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: \${{event.price}}</div>

    <div [hidden]="!event?.location">
      <span>Location: {{event?.location?.address}}</span>
      <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>

    <div [hidden]="!event?.onlineUrl">
      Oline: {{event.onlineUrl}}
    </div>

  </div>
  `,
  styles: [`
    .green {color: #79ee79 !important; }
    .bold {font-weight: bold;}
    .thumbnail {min-height: 210px;}
    .pad-left { margin-left: 10px;}
    .well div { color: #bbb; }
    .hoverwell:hover {
	    background-color: #657586;
	    cursor: pointer;
    }
  `]
})
export class EventThumbnailComponent implements OnInit {



  @Input() event: any;

  constructor() {
   }

  ngOnInit(): void {
  }

  getStartLate(): any {
    if(this.event && this.event.time === '10:00 am') {
      return {
        color: '#79e9ee',
        'font-weight': 'bold'
      }
      return {}
    }
  }

  applyClass() {
    if(this.event && this.event.time === '8:00 am') {
      // return 'green bold'
      return ['green', 'bold']
    }

    // return ''
    return []
  }
}
