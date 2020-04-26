import { Component, OnInit } from '@angular/core';
import { Boat } from '../../entities/boat.component';
import { BoatService } from '../../service/boat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {

  boat: Boat;

  constructor(
    private boatService: BoatService,
    private router: Router) { }

  ngOnInit() {
    this.boat = window.history.state.boat;
  }

  save(): void {
    this.boatService.boats.push(this.boat);
    this.router.navigate(['']);
  }

}
