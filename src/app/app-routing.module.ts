import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {path: "activities", component:ActivityListComponent},
  {path: "activity/:id",component:MapComponent },
  {path: "", redirectTo: "/activities",pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
