import { Component } from '@angular/core';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  lat:  string = "";
  lng: string="";
  
}

