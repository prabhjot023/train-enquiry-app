
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-station-location',
  templateUrl: './station-location.component.html',
  styleUrls: ['./station-location.component.css']
})
export class StationLocationComponent implements OnInit {
  _url:any;
  public stationAuto; 
   
  a=0;
  
  er=0;
  
    constructor(private http:HttpClient) { }
  
    ngOnInit(): void {
    }
    getValues(form:NgForm)
    {
     
      this._url="https://indianrailapi.com/api/v2/StationLocationOnMap/apikey/63593fd46f3c19d15de114fb67812739/StationCode/"+ form.value.stationCode;
      
      this.http.get(this._url).subscribe((data:any) =>{
        

        this.stationAuto=data;
        if(this.stationAuto == null)
        {
         this.er=1;
        }
        
        console.log(this.stationAuto);
      },error =>{
        alert('Api not responding');
        
      });
      this.a=1;
    }
    
  
  }
  