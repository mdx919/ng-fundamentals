import { ISessions } from './../shared/event.model';
import { Injectable } from "@angular/core";

@Injectable()
export class VoterService {
    deleteVoter(session: ISessions, voterName: string) {
        session.voters = session.voters.filter(voter => voter !== voterName);
    }

    addVoter(session: ISessions, voterName: string) {
        session.voters.push(voterName);
    }

    userHasVoted(session: ISessions, voterName: string) {
        return session.voters.some(voter => voter === voterName);
    }
}