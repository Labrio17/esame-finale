import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-dettaglio', // Set your selector appropriately
  templateUrl: './dettaglio.component.html',
})
export class DettaglioComponent implements OnInit {
  lat: string ="";
  lng: string= "";
  meteoData: any = []; // Adjust the type based on your API response


  constructor(private route: ActivatedRoute ,private api: ApiService) {}

  ngOnInit() {
    // Accedi ai parametri dell'URL usando ActivatedRoute
    this.route.params.subscribe(params => {
      this.lat = params['lat']; // il "+" converte la stringa in numero
      this.lng = params['lng'];
      
      this.api.getMeteoData(this.lat, this.lng).subscribe((response: any) => {
      this.meteoData = response;
      console.log('meteoData:', this.meteoData);
});
    });
  }
}