import { Component } from '@angular/core';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  meteoData: any = [];
  lat:  string = "";
  lng: string="";
 

  constructor(private api: ApiService) {}

  search() {
    this.api.getMeteoData(this.lat,this.lng).subscribe((response: any) => {
      this.meteoData = response;
      console.log(response);
    });

    //this.api.getElencoDatiMeteo(this.lat,this.long).subscribe((response: any) => {
      //this.meteoData = response;
      //console.log(response);
    //});


  }
}

