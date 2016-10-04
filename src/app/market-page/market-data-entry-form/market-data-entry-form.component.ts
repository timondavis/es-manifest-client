import { Component } from '@angular/core';
import { MarketDataPoint } from '../market-data-point';
import { MarketDataService } from "../market-data.service";

@Component({
  selector: 'spcc-market-data-entry-form',
  templateUrl: './market-data-entry-form.component.html',
  styleUrls: ['./market-data-entry-form.component.css']
})
export class MarketDataEntryFormComponent {

  public model : MarketDataPoint;

  constructor(private marketDataService : MarketDataService ) {

      this.clear();
  }

  public postItem( event ) {

    event.preventDefault();

    this.marketDataService.pushItem( this.model ).subscribe(
        (res) => this.clear(),
        (err) => console.log( err )
    );
  }

  /**
   * Prevent the enter key from submitting the form
   * @param event
   */
  public handleKeydown( event ) {

    if ( event.which === 13 ) {

      event.preventDefault();
    }
  }

  public clear() {

    this.model = new MarketDataPoint({
      'date': '',
      'planet': '',
      'region': '',
      'commodities': [
        { 'name': 'food',         'cost': '' },
        { 'name': 'clothing',     'cost': '' },
        { 'name': 'metal',        'cost': '' },
        { 'name': 'equipment',    'cost': '' },
        { 'name': 'plastic',      'cost': '' },
        { 'name': 'medical',      'cost': '' },
        { 'name': 'industrial',   'cost': '' },
        { 'name': 'electronics',  'cost': '' },
        { 'name': 'heavyMetals',  'cost': '' },
        { 'name': 'luxuryGoods',  'cost': '' }
      ]
    });
  }
}
