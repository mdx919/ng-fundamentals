import { AuthService } from './../user/auth.service';
import { Component } from '@angular/core';
import { ISessions, EventService } from '../events';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px; }
        #searchForm { margin-right: 100px; }
        @media (max-width: 1200px) { #searchform {display: none} }
        li > a.active { color: #F97924; }
    `]
})
export class NavbarComponent {
    searchTerm: string = "";
    foundSessions: ISessions[];

    constructor(private authService: AuthService, private eventService: EventService) { 
     }

     searchSessions(searchTerm) {
         this.eventService.searchSessions(searchTerm).subscribe(sessions => {
             this.foundSessions = sessions;
         })
         
     }
}