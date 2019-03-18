import { Injectable } from '@angular/core';
import {Activity} from 'src/shared/Activity';
import {SavedActivities} from 'src/shared/ActivitiesData';
import {ActivityService} from 'src/app/services/activity.service';
import {environment} from 'src/environments/environment';

//mapbox key
var apiToken = environment.MAPBOX_API_KEY;
declare var omnivore: any;
declare var L: any;

const defaultCoords: number[] = [20, -10];
const defaultZoom: number = 6;

@Injectable()
export class MapService {

  constructor() { }

  getActivity(id: number){
    return SavedActivities.slice(0).find(run => run.id == id)
  }

  plotActivity(id: number){
    var myStyle = {
      "color": "#3949AB",
      "weight": 5,
      "opacity": 0.95
    };

    var map = L.map('map').setView(defaultCoords, defaultZoom);

    map.maxZoom = 100;

    L.tileLayer('https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.dark',
      accessToken: apiToken
    }).addTo(map);

    var customLayer = L.geoJson(null, {
      style: myStyle
    });

    var gpxLayer = omnivore.gpx(SavedActivities.slice(0).find(run => run.id == id).gData, null, customLayer)
    .on('ready', function() {
      map.fitBounds(gpxLayer.getBounds());
    }).addTo(map);
  }

}
