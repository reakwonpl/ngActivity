import { Injectable } from '@angular/core';
import {Activity} from 'src/shared/Activity';
import {SavedActivities} from 'src/shared/ActivitiesData';

@Injectable({
  providedIn: 'root'
})
export class ActivityService 
{
  
  GetActivities():Activity[]
  {
    //start from 0 index and give us all 
    return SavedActivities.slice(0);
  }

  GetTotalActivities(allActivities:Activity[])
  {
    return allActivities.length;
  }

  GetTotalDistance(allActivities:Activity[])
  {
    var totalDistance = 0;
   for (let i = 0; i < allActivities.length; i++)
    {
       totalDistance += allActivities[i].distance;
    }

    return totalDistance;
  }

  GetFirstDate(allActivities:Activity[])
  {
    var earliestDate = new Date("01/01/4000");
    for(var i =0; i < allActivities.length;i++)
    {
      var currentDate = allActivities[i].date;
        //if cd is before than ed  
      if(currentDate < earliestDate)
      {
        earliestDate = currentDate;
      }
    }
    return earliestDate;
  }

  constructor() { }

}