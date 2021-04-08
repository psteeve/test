import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from 'src/interfaces/ticket.interface';

@Component({
    selector: 'app-tickets',
    templateUrl: './tickets.component.html'
})
export class TicketsComponent implements OnInit {

    constructor() { }

    @Input() tickets: ReadonlyArray<Ticket>;

    ngOnInit(): void {
        
    }

    getTicketStatut({completed}): string {
        return completed ? "Compléter" : "Non-compléter";
    }

}
