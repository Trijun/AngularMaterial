import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomePageComponent } from './home-page/home-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { SidecontentPageComponent } from './sidecontent-page/sidecontent-page.component';
import { SidecontentPreferencePageComponent } from './sidecontent-preference-page/sidecontent-preference-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    SecondPageComponent,
    SidecontentPageComponent,
    SidecontentPreferencePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
