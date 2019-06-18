import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'upvote',
    templateUrl: './upvote.component.html',
    styles: ['/app/events/event-details/upvote.component.css']
})
export class UpvoteComponent implements OnInit{
    @Input() count: number;
    @Input() set voted(val) {
        this.iconColor = val ? 'red' : 'white';
    };
    @Output() vote = new EventEmitter();
    iconColor: string;

    ngOnInit() {
        console.log(this.count);
        
    }

    onClick() {
        this.vote.emit({})
    }
}