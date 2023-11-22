import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { last } from 'rxjs';



@Injectable({
 providedIn: 'root',
})
export class ApiService {
    constructor( private http: HttpClient) {}

    getMeteoData(lat: string, lng : string) {
        return this.http
            .get(`https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}`);
    }

    getSpecificMeteoData(lat: string, lng : string) {
        return this.http
            .get(`https://www.7timer.info/bin/astro.php?lon=${lng}&lat=${lat}&ac=0&unit=metric&output=json&tzshift=0`);
    }

}