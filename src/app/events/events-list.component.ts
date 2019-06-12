import { Component } from '@angular/core';

@Component({
    selector: '<events-list></events-list>',
    template: `
        <div>
        <h2>Upcoming Angular Events</h2>
        <img src="/assets/images/basic-shield.png" alt="">
        <hr>
        <event-thumbnail [event]="event1">
        </event-thumbnail>
        </div>
    `
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/3/2019',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1044 DT',
            city: 'London',
            country: 'England'
        }
    }
}
