import { VoterService } from './voter.service';
import { AuthService } from './../../user/auth.service';
import { ISessions } from './../shared/event.model';
import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'session-list',
    templateUrl: './sessions-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions:ISessions[];
    @Input() filterBy: string = "all";
    @Input() sortBy: string;
    visibleSessions: ISessions[] = [];

    constructor(private authService: AuthService, private voterService: VoterService) {}

    ngOnInit() {
        this.visibleSessions.forEach((item) => {
            console.log(item.voters);
            
        })
        
    }

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? 
            this.visibleSessions.sort(sortByNameAsc) : 
            this.visibleSessions.sort(sortByVotesDesc);
        }
    }

    filterSessions(filter) {
        if(filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter;
            })
        }
    }

    toggleVote(session: ISessions) {
        const { userName } = this.authService.currentuser;

        if (this.userHasVoted(session)) {  
            this.voterService.deleteVoter(session, userName);
        } else {
            this.voterService.addVoter(session, userName);
        }
        if (this.sortBy === 'votes') {
            this.visibleSessions.sort(sortByVotesDesc);
        }
    }
    userHasVoted(session: ISessions) {
        const { userName } = this.authService.currentuser;

        return this.voterService.userHasVoted(session, userName);
    }

}



function sortByNameAsc(s1:ISessions, s2: ISessions) {
    if(s1.name > s2.name) return 1;
    else if(s1.name === s2.name) return 0;
    return -1;
}

function sortByVotesDesc(s1:ISessions, s2: ISessions) {
    return s2.voters.length - s1.voters.length;
}