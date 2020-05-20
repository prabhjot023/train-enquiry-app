import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-live-train-status',
  templateUrl: './live-train-status.component.html',
  styleUrls: ['./live-train-status.component.css']
})
export class LiveTrainStatusComponent implements OnInit {

  private _url:string;
 a:any;
 er=0;
 public live;
 public current;
  constructor(private http:HttpClient, private SpinnerService: NgxSpinnerService) { this.a=0;}

  ngOnInit(): void {
  }
  getValues(form:NgForm)
  {
    this.SpinnerService.show();  
    this._url="https://.com/api/v2/livetrainstatus/apikey/9df739876e6888123aeae384cf5121f6/trainnumber/" + form.value.trainNo + "/date/" + form.value.newDate + "/";
    this.http.get(this._url).subscribe((data :any) =>{
      console.log(data);
      
      this.live=data.TrainRoute;
      this.current=data.CurrentStation;
      if(this.live[0] == null)
      {
       this.er=1;
      }
      this.SpinnerService.hide();  
    },error =>{
      alert('No Train is running due to COVID-19');
      this.SpinnerService.hide(); 
    });
  }

}
