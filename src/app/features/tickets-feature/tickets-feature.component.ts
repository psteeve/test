import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from 'src/app/backend.service';
import { Ticket } from 'src/interfaces/ticket.interface';

@Component({
  selector: 'app-tickets-feature',
    template: `
    <app-tickets [tickets]="tickets$ | async"></app-tickets>
    `
})
export class TicketsFeatureComponent implements OnInit {
  public readonly tickets$: Observable<Ticket[]> = this.backendService.tickets();
  
  constructor(private readonly backendService: BackendService) { }

  ngOnInit(): void {
  }

}
