import {Activity} from '../shared/Activity';

export const SavedActivities: Activity[] = [
    {
        "id":1,
        "name": "Bogucice",
        "date": new Date('01/05/2018'),
        "comments": "Good weather",
        "distance": 4,
        "gData": '../assets/gData/bogunice.gpx'
    },

    {
        "id":2,
        "name": "Trzebislawska Gora",
        "date": new Date('05/05/2019'),
        "comments": "Little bit windy",
        "distance": 23,
        "gData": '../assets/gData/TrzebislawskaGora.gpx'
    },

    {
        "id":3,
        "name": "Woszcyce",
        "date": new Date('02/02/2018'),
        "comments": "Snowing hard",
        "distance":10,
        "gData": '../assets/gData/woszczyce.gpx'
    },

    {
        "id":4,
        "name": "Paprocany",
        "date": new Date('07/07/2017'),
        "comments": "Sunny",
        "distance": 11,
        "gData": '../assets/gData/Paprocany.gpx'
    }

];
