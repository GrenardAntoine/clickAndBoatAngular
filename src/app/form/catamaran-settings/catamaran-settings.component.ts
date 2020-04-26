import { Component, OnInit } from '@angular/core';
import { Boat } from '../../entities/boat.component';
import { FormControl, FormGroup } from '@angular/forms';
import { CatamaranInfo } from '../../entities/catamaran-info.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catamaran-settings',
  templateUrl: './catamaran-settings.component.html',
  styleUrls: ['./catamaran-settings.component.scss']
})
export class CatamaranSettingsComponent implements OnInit {

  boat: Boat;

  form = new FormGroup({
    length: new FormControl(''),
    width: new FormControl(''),
    draft: new FormControl(''),
    crew: new FormControl(''),
    annex: new FormControl('')
  });

  constructor(private router: Router) { }

  ngOnInit() {
    this.boat = window.history.state.boat;
  }

  next(): void {
    this.boat.additionalInfo = new CatamaranInfo();

    this.boat.additionalInfo.length = this.form.get('length').value;
    this.boat.additionalInfo.width = this.form.get('width').value;
    this.boat.additionalInfo.draft = this.form.get('draft').value;
    this.boat.additionalInfo.crew = this.form.get('crew').value;
    this.boat.additionalInfo.annex = this.form.get('annex').value;

    this.router.navigate(['/submit'], {state: {boat: this.boat}});
  }
}
