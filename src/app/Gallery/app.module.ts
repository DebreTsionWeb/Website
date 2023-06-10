import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { GalleryScreen } from './GalleryScreen.component';

import { HeaderComponent } from '../.GlobalComponents/Header/Header.component';
import { FooterComponent } from '../.GlobalComponents/Footer/Footer.component';
import { GalleryBody } from './GalleryComponents/GalleryBody.component';

@NgModule({
  declarations: [
    GalleryScreen,
    HeaderComponent,
    FooterComponent,
    GalleryBody
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [GalleryScreen]
})
export class AppModule { }
