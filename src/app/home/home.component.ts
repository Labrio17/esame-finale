import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { HttpClient } from '@angular/common/http';
import Drink from '../_models/drink.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  drinks: Drink[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getElencoDrinks('a').subscribe( (drinks) => {
      this.drinks = drinks;
    })
  }
}
