import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnerTypeComponent } from './form/owner-type/owner-type.component';
import { BoatTypeComponent } from './form/boat-type/boat-type.component';
import { CatamaranSettingsComponent } from './form/catamaran-settings/catamaran-settings.component';
import { SailingShipSettingsComponent } from './form/sailing-ship-settings/sailing-ship-settings.component';
import { SubmitComponent } from './form/submit/submit.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'owner-type', component: OwnerTypeComponent },
  { path: 'boat-type', component: BoatTypeComponent },
  { path: 'catamaran-settings', component: CatamaranSettingsComponent },
  { path: 'sailing-ship-settings', component: SailingShipSettingsComponent },
  { path: 'submit', component: SubmitComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
