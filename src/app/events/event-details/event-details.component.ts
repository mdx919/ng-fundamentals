import { EventService } from './../shared/event.service';
import { Component } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISessions } from '../shared';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
        a { cursor:pointer }
    `]
})
export class EventDetailsComponent {
    event:IEvent;
    addMode = false;
    filterBy: string = 'all';
    sortBy: string = 'votes';

    constructor(private eventService: EventService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.event = this.eventService.getEvent(+params['id'])
            this.addMode = false;
        })

        // this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }

    addSession() {
        this.addMode = !this.addMode;
    }

    saveNewSession(session:ISessions) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));

        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = !this.addMode;
    }

    cancelAddSession() {
        this.addMode = !this.addMode;
    }
}