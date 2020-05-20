import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-coach-position',
  templateUrl: './coach-position.component.html',
  styleUrls: ['./coach-position.component.css']
})
export class CoachPositionComponent implements OnInit {
  _url:any;
  public stationAuto  ;
   
  a=0;
  
  er=0;
  
    constructor(private http:HttpClient, private SpinnerService: NgxSpinnerService) { }
  
    ngOnInit(): void {
    }
    getValues(form:NgForm)
    {
      
      this._url="https://indianrailapi.com/api/v2/CoachPosition/apikey/63593fd46f3c19d15de114fb67812739/TrainNumber/"+ form.value.stationCode+"/";
      this.SpinnerService.show();  
      this.http.get(this._url).subscribe((data:any) =>{
       
        this.stationAuto=data.Coaches;
        if(this.stationAuto[0] == null)
        {
         this.er=1;
        }
        this.SpinnerService.hide();  
        console.log(data);
        
       

       
      },error =>{
        alert('Api not responding');
        this.SpinnerService.hide(); 
      });
      this.a=1;
    }
    
  
  }
  
 