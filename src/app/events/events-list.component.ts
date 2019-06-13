import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from './common/toastr.service';

declare let toastr;
@Component({
    template: `
        <div>
        <h2>Upcoming Angular Events</h2>
        <img src="/assets/images/basic-shield.png" alt="">
        <hr>
        <div class="row">
            <div (click)="handleThumbnailClick(event.name)" class="col-md-5" *ngFor="let event of events">
                <event-thumbnail [event]="event">
                </event-thumbnail>
            </div>
        </div>
        </div>
    `
})
export class EventsListComponent implements OnInit{
    events:any[];
    constructor(private eventService: EventService, private toastrService: ToastrService, 
        private route: ActivatedRoute) { 
    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName) {
        this.toastrService.success(eventName)
    }
}
