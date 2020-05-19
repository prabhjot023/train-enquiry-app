import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { LiveTrainStatusComponent } from './live-train-status/live-train-status.component';
import { StationAutocompleteComponent } from './station-autocomplete/station-autocomplete.component';
import { AutoCompleteTrainInfoComponent } from './auto-complete-train-info/auto-complete-train-info.component';
import { StationLocationComponent } from './station-location/station-location.component';
import { CoachPositionComponent } from './coach-position/coach-position.component';


const routes: Routes = [
  {path :'Home',component: CarouselComponent},
  
  { path:'LiveTrainStatus', component: LiveTrainStatusComponent},
  { path:'StationAutocomplete', component: StationAutocompleteComponent},
  { path:'AutoCompleteTrainInfo', component: AutoCompleteTrainInfoComponent}, 
  { path:'StationLocation', component: StationLocationComponent},
  { path:'CoachPosition', component: CoachPositionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CarouselComponent,LiveTrainStatusComponent,StationAutocompleteComponent,AutoCompleteTrainInfoComponent
,
StationLocationComponent,CoachPositionComponent]
