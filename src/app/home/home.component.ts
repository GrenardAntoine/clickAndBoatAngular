import { Component, OnInit } from '@angular/core';
import { BoatService } from '../service/boat.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Boat } from '../entities/boat.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filteredBoats: Boat[];

  form = new FormGroup({
    ownerType: new FormControl(''),
    boatType: new FormControl('')
  });

  constructor(private boatService: BoatService) { }

  ngOnInit() {

    this.filterBoats();

    this.form.get('ownerType').valueChanges.subscribe(() => {
      this.filterBoats();
    });

    this.form.get('boatType').valueChanges.subscribe(() => {
      this.filterBoats();
    });
  }

  filterBoats(): void {
    this.filteredBoats = this.boatService.boats;

    if (this.form.get('ownerType').value !== '') {
      this.filteredBoats = this.filteredBoats.filter((boat: Boat) => {
        return boat.ownerType === this.form.get('ownerType').value;
      });
    }

    if (this.form.get('boatType').value !== '') {
      this.filteredBoats = this.filteredBoats.filter((boat: Boat) => {
        return boat.boatType === this.form.get('boatType').value;
      });
    }
  }
}
