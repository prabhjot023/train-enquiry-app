import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';

import { FormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NgxSpinnerModule } from "ngx-spinner";  
import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { CarouselComponent } from './carousel/carousel.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NavbarComponent } from './navbar/navbar.component';
import { LiveTrainStatusComponent } from './live-train-status/live-train-status.component';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material';
import { StationAutocompleteComponent } from './station-autocomplete/station-autocomplete.component';
import {MatTableModule} from '@angular/material/table';
import { AutoCompleteTrainInfoComponent } from './auto-complete-train-info/auto-complete-train-info.component';
import { StationLocationComponent } from './station-location/station-location.component';
import { CoachPositionComponent } from './coach-position/coach-position.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CarouselComponent,
    NavbarComponent,
   LiveTrainStatusComponent,
   StationAutocompleteComponent,
   AutoCompleteTrainInfoComponent,
   StationLocationComponent,
   CoachPositionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,NgbModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatTableModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,MatCardModule,MatAutocompleteModule,
    MatInputModule,MatFormFieldModule,HttpClientModule,MatDatepickerModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
