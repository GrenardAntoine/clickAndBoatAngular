import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Boat } from '../../entities/boat.component';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-boat-type',
  templateUrl: './boat-type.component.html',
  styleUrls: ['./boat-type.component.scss']
})
export class BoatTypeComponent implements OnInit {

  boat: Boat;

  form = new FormGroup({
    boatType: new FormControl(''),
  });

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.boat = window.history.state.boat;
  }

  next(): void {
    this.boat.boatType = this.form.get('boatType').value;

    if (this.boat.boatType === 'catamaran') {
      this.router.navigate(['/catamaran-settings'], {state: {boat: this.boat}});
    } else if (this.boat.boatType === 'voilier') {
      this.router.navigate(['/sailing-ship-settings'], {state: {boat: this.boat}});
    } else {
      this.router.navigate(['/submit'], {state: {boat: this.boat}});
    }
  }

}
