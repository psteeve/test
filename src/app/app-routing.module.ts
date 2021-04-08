import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketsFeatureComponent } from './features/tickets-feature/';

const routes: Routes = [
 {path : 'list-tickets', component: TicketsFeatureComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
