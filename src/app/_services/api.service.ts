import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import Drink from '../_models/drink.model';

@Injectable({
 providedIn: 'root',
})
export class ApiService {
    constructor( private http: HttpClient) {}
    getElencoDrinks(letter: string) {
        return this.http
            .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + letter)
            .pipe( map( (response: any) => {
                // response.drinks.forEach(element => {
                //     element.tags = element.tags.split(',')
                //     element.ingredients = []
                //     element.ingredient.push({
                //         name: 'gin',
                //         quantity: '1/4 shot'
                //     })
                // });
                
                return response.drinks as Drink[];
            }))
    }
}