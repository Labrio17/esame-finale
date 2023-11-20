import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
 providedIn: 'root',
})
export class ApiService {
    constructor( private http: HttpClient) {}
    getMeteoData(lat: string, lng : string) {
        return this.http
            .get(`https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}`);
    }
}