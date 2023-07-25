import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';

// google map
import { GoogleMapsModule } from '@angular/google-maps'
// angular material

import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatTableModule,
    ReactiveFormsModule,

    GoogleMapsModule,
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
