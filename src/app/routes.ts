import { CreateSessionComponent } from './events/event-details/create-session.component';
import { Routes } from '@angular/router';
import { Error404Component } from './error/404.components';
import {
    EventListResolver,
    CreateEventComponent,
    EventDetailsComponent,
    EventsListComponent,
    EventRouteActivator
} from './events/index';

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent,
        resolve: { events: EventListResolver } },
    { path: 'events/:id', component: EventDetailsComponent,
        canActivate: [EventRouteActivator] },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule' }
]