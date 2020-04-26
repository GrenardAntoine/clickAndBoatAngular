import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnerTypeComponent } from './form/owner-type/owner-type.component';
import { BoatTypeComponent } from './form/boat-type/boat-type.component';
import { CatamaranSettingsComponent } from './form/catamaran-settings/catamaran-settings.component';
import { SailingShipSettingsComponent } from './form/sailing-ship-settings/sailing-ship-settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubmitComponent } from './form/submit/submit.component';
import { HomeComponent } from './home/home.component';
import { BoatService } from './service/boat.service';

@NgModule({
  declarations: [
    AppComponent,
    OwnerTypeComponent,
    BoatTypeComponent,
    CatamaranSettingsComponent,
    SailingShipSettingsComponent,
    SubmitComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [BoatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
