import {Component, Input} from '@angular/core';
import {Country} from "../../interfaces/country.interface";
import {count} from "rxjs";

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: ``
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];

  protected readonly count = count;
}
