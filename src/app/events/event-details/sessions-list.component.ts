import { Component, Input } from "@angular/core";
import { ISessions } from '../shared';

@Component({
    selector: 'session-list',
    templateUrl: './sessions-list.component.html'
})
export class SessionListComponent {
    @Input() sessions:ISessions[];

}