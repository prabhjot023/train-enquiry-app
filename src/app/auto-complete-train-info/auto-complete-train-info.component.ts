import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-auto-complete-train-info',
  templateUrl: './auto-complete-train-info.component.html',
  styleUrls: ['./auto-complete-train-info.component.css']
})
export class AutoCompleteTrainInfoComponent implements OnInit {

  _url:any;
stationAuto  ;
i=[];
a=0;
ol=0;
er=0;



  constructor(private http:HttpClient,private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
  }
  getValues(form:NgForm)
  {
    this.SpinnerService.show();
    this._url="https://indianrailapi.com/api/v2/AutoCompleteTrainInformation/apikey/a1a72eb5ca2a37a39fe3900cdb7c5c0b/TrainNumberOrName/"+ form.value.TrainNo+"/";
    this.http.get(this._url).subscribe((data:any) =>{
     
      this.stationAuto=data.Trains;
      if(this.stationAuto[0] == null)
      {
       this.er=1;
      }
      this.SpinnerService.hide(); 
  }
    ,error =>{
      alert('Api not responding');
      this.SpinnerService.hide(); 
    });
    
    this.a=1;
  }
  

}
