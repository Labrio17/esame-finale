import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
 providedIn: 'root',
})
export class ApiService {
    constructor( private http: HttpClient) {}
    getElencoSeries(title: string) {
        return this.http
            .get('https://api.tvmaze.com/search/shows?q=' + title);
    }
}