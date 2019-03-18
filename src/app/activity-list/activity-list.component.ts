import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/shared/Activity';
import { ActivityService } from '../services/activity.service';


@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activities: Activity[];
  totalActivities: number;
  totalDistance: number;
  firstDate: Date;


  constructor(private _activitiesData: ActivityService) { }

  ngOnInit() {
    this.activities = this._activitiesData.GetActivities();
    this.totalActivities = this._activitiesData.GetTotalActivities(this.activities);
    this.totalDistance = this._activitiesData.GetTotalDistance(this.activities);
    this.firstDate = this._activitiesData.GetFirstDate(this.activities);

  }

}
