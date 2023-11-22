import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-dettaglio', 
  templateUrl: './dettaglio.component.html',
})
export class DettaglioComponent implements OnInit {
  lat: string ="";
  lng: string= "";
  meteoData: any = []; 
  specificMeteoData: any = [];

  constructor(private route: ActivatedRoute ,private api: ApiService) {}

  ngOnInit() {
    // Accedi ai parametri dell'URL usando ActivatedRoute
    this.route.params.subscribe(params => {
      this.lat = params['lat']; 
      this.lng = params['lng'];
      

      //Prima chiamata API
      this.api.getMeteoData(this.lat, this.lng).subscribe((response: any) => {
        this.meteoData = response;
        console.log('meteoData:', this.meteoData);
      }
      );

      //Seconda chiamata API
      this.api.getSpecificMeteoData(this.lat,this.lng).subscribe((response: any) => {
      this.specificMeteoData = response.dataseries;
      console.log('specificMeteoData', response);
      });



    });
  }
}