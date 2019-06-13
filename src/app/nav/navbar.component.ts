import { AuthService } from './../user/auth.service';
import { Component } from '@angular/core';

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
    constructor(private authService: AuthService) { }
}