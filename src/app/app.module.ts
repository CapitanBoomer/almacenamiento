import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {ReactiveFormsModule} from '@angular/forms'
import { IonicStorageModule } from '@ionic/storage-angular'
import {Drivers} from '@ionic/storage'

import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot({
      name:'almacenamiento',
      driverOrder:[Drivers.IndexedDB,Drivers.LocalStorage,Drivers.SecureStorage]
    }),
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
