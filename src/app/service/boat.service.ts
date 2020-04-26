import { Injectable } from '@angular/core';
import { Boat } from '../entities/boat.component';
import { CatamaranInfo } from '../entities/catamaran-info.component';

@Injectable({
  providedIn: 'root'
})
export class BoatService {

  public boats: Boat[] = [
    new Boat('particulier', 'voilier'),
    new Boat('professionnel', 'catamaran', new CatamaranInfo(12, 3, 14.5, false, true)),
    new Boat('particulier', 'motorBoat'),
    new Boat('professionnel', 'semiRigide'),
    new Boat('particulier', 'peniche'),
    new Boat('particulier', 'jetSki'),
    new Boat('particulier', 'yatch')
  ];

  constructor() { }
}
