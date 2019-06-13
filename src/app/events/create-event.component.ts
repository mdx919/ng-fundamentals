import { Component } from "@angular/core";
import {  Router } from '@angular/router';

@Component({
    template: `
        <div>
            <hr>
            <div>
                <h3>create new event</h3>
            </div>
            <br>
            <br>
            <button type="submit" class="btn btn-primary">Save</button>
            <button type="submit" class="btn btn-default" (click)="cancel()">
                Cancel
            </button>
        </div>
    `
})
export class CreateEventComponent {
    isDirty:boolean = false;
    constructor(private router: Router) { }
    cancel() {
        this.router.navigate(['/events'])
    }
}