import { Component } from '@angular/core';
import { MarketDataPoint } from '../market-data-point';
import { Commodity } from '../commodity';
import { ViewChild } from "@angular/core/src/metadata/di";
import { PrettyInputComponent } from "../../shared/pretty-input/pretty-input.component";
import { NgModel } from "@angular/forms";

@Component({
  selector: 'spcc-market-data-entry-form',
  templateUrl: './market-data-entry-form.component.html',
  styleUrls: ['./market-data-entry-form.component.css']
})
export class MarketDataEntryFormComponent {

  public model : MarketDataPoint;

  constructor() {

    this.model = new MarketDataPoint()
    this.model.hydrateFromDocument({
      '_id': 1,
      'date': '06/07/1928',
      'planet': 'Earth',
      'region': 'Human Empire',
      'commodities': [
        { _id : '1',  'name': 'food',         'cost': 243 },
        { _id : '2',  'name': 'clothing',     'cost': 300 },
        { _id : '3',  'name': 'metal',        'cost': 376 },
        { _id : '4',  'name': 'equipment',    'cost': 568 },
        { _id : '5',  'name': 'plastic',      'cost': 184 },
        { _id : '6',  'name': 'medical',      'cost': 787 },
        { _id : '7',  'name': 'industrial',   'cost': 733 },
        { _id : '8',  'name': 'electronics',  'cost': 848 },
        { _id : '9',  'name': 'heavyMetals',  'cost': 1012 },
        { _id : '10', 'name': 'luxuryGoods',  'cost': 1228 }
      ]
    });
  }
}
