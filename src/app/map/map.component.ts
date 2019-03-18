import { Component, OnInit,AfterViewInit } from '@angular/core';
import {MapService} from "src/app/services/map.service";
import {Activity} from 'src/shared/Activity';
import {ActivatedRoute} from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { stringify } from 'querystring';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private _mapService: MapService,private _route:ActivatedRoute) { }

  
 activity:any;
 activityName:string;
 activityComment:string;
 activityDate:Date;
 activityDistance:number;
 gData:any;
 
 ngOnInit() {

   this.activity = this._mapService.getActivity
   ( +this._route.snapshot.params['id']);

  

  }
//draw a map
  ngAfterViewInit()  {   
    

    this._mapService.plotActivity(+this._route.snapshot.params['id']);
    this.activityName = this.activity.name;
    this.activityComment = this.activity.comments;
    this.activityDistance = this.activity.distance;
    this.activityDate = this.activity.date;
    this.gData = this.activity.gData;
  }
}
