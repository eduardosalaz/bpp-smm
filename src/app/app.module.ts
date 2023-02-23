import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { OnlineComponent } from './components/online/online.component';
import { OfflineComponent } from './components/offline/offline.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TutorialComponent,
    OnlineComponent,
    OfflineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
