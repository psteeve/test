import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TicketsComponent } from './tickets.component';


@NgModule({
    imports: [CommonModule],
    declarations: [TicketsComponent],
    exports: [TicketsComponent]
})
export class TicketsModule {}
