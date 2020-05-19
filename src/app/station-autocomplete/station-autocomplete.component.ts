import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-station-autocomplete',
  templateUrl: './station-autocomplete.component.html',
  styleUrls: ['./station-autocomplete.component.css']
})
export class StationAutocompleteComponent implements OnInit {
_url:any;
public stationAuto  ;
 
a=0;

er=0;

  constructor(private http:HttpClient, private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
  }
  getValues(form:NgForm)
  {
    
    this._url="https://indianrailapi.com/api/v2/AutoCompleteStation/apikey/63593fd46f3c19d15de114fb67812739/StationCodeOrName/"+ form.value.stationCode+"/";
    this.SpinnerService.show();  
    this.http.get(this._url).subscribe((data:any) =>{
      this.stationAuto,this.er=0;
      this.stationAuto=data.Station;
      if(this.stationAuto[0] == null)
      {
       this.er=1;
      }
      this.SpinnerService.hide();  
      
    
    },error =>{
      alert('Api not responding');
      this.SpinnerService.hide(); 
    });
    this.a=1;
  }
  

}
