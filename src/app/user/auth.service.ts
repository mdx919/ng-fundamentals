import { Injectable } from "@angular/core";
import { IUser } from './user.model';

@Injectable()
export class AuthService {
    currentuser: IUser;

    loginUser(userName: string, password: string) {
        this.currentuser = {
            id: 1,
            userName: userName,
            firstName: 'John',
            lastName: 'Papa'
        }
    }

    isAuthenticated() {
        return !!this.currentuser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentuser.firstName = firstName;
        this.currentuser.lastName = lastName;
    }
}