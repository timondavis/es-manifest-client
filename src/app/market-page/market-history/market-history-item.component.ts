import { Component, OnInit } from '@angular/core';
import { MarketDataPoint } from "../market-data-point";
import { Input } from "@angular/core/src/metadata/directives";
import { MarketDataService } from "../market-data.service";

@Component({
  selector: '[spcc-market-history-item]',
  templateUrl: './market-history-item.component.html',
  styleUrls: ['./market-history-item.component.css']
})
export class MarketHistoryItemComponent implements OnInit {

  @Input() dataPoint : MarketDataPoint;

  constructor( private marketDataService : MarketDataService ) { }

  ngOnInit() {
  }

  public handleDeleted( event ) {

    this.marketDataService.deleteItem( this.dataPoint ).subscribe(
        ( data ) => data,
        ( err ) => console.log( err )
    );
  }

}
