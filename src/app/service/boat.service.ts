import { Injectable } from '@angular/core';
import { Boat } from '../entities/boat.component';
import { CatamaranInfo } from '../entities/catamaran-info.component';

@Injectable({
  providedIn: 'root'
})
export class BoatService {

  public boats: Boat[] = [
    new Boat('individual', 'sailingShip'),
    new Boat('professional', 'catamaran', new CatamaranInfo(12, 3, 14.5, false, true)),
    new Boat('individual', 'motorBoat'),
    new Boat('professional', 'halfRigid'),
    new Boat('individual', 'barge'),
    new Boat('individual', 'jetSki'),
    new Boat('individual', 'yatch')
  ];

  constructor() { }
}
