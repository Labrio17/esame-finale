import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { HomeComponent } from './home/home.component';
import { ApiService } from './_services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DettaglioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
