import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BackendService } from 'src/app/backend.service';
import { TicketsModule } from 'src/app/components/tickets';


import { TicketsFeatureComponent } from './tickets-feature.component';

@NgModule({
    declarations: [TicketsFeatureComponent],
    imports: [CommonModule, TicketsModule],
    exports: [TicketsFeatureComponent],
    providers: [BackendService]
})
export class TicketsFeatureModule {

}
