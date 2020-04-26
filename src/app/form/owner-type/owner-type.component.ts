import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Boat } from '../../entities/boat.component';

@Component({
  selector: 'app-owner-type',
  templateUrl: './owner-type.component.html',
  styleUrls: ['./owner-type.component.scss']
})
export class OwnerTypeComponent implements OnInit {

  form = new FormGroup({
    ownerType: new FormControl(''),
  });

  constructor(private router: Router) { }

  ngOnInit() {
  }

  start(): void {
    const boat = new Boat();
    boat.ownerType = this.form.get('ownerType').value;

    console.log(boat);
    this.router.navigate(['/boat-type'], { state: { boat }});
  }
}
