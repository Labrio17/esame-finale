import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  series: any = [];
  valoreInput : string = "";
  

  constructor(private api: ApiService) {}

  ngOnInit(): void {
// Estrai il valore dall'elemento di input
    this.api.getElencoSeries(this.valoreInput).subscribe( (series) => {
      this.series = series;
    })
  }
}
