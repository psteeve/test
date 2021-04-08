import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { TicketsFeatureModule } from './features/tickets-feature';

@NgModule({
    declarations: [AppComponent],
    imports: [CommonModule, BrowserModule, AppRoutingModule, TicketsFeatureModule],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
