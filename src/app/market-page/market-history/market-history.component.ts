import { Component, OnInit } from '@angular/core';
import { MarketDataService } from "../market-data.service";
import { MarketDataPoint } from "../market-data-point";

@Component({
  selector: 'spcc-market-history',
  templateUrl: './market-history.component.html',
  styleUrls: ['./market-history.component.css']
})
export class MarketHistoryComponent implements OnInit {

  private dataPoints : MarketDataPoint[];

  private query : any;

  constructor( private marketDataService : MarketDataService ) {

    this.query = {
      'sort' : 'date',
      'order' : 1
    }
  }

  ngOnInit() {

    this.loadDataPoints();

    this.marketDataService.itemPosted.subscribe(
      ( x ) => this.loadDataPoints(),
      ( err ) => console.log( err )
    );

    this.marketDataService.itemsDeleted.subscribe(
      ( x ) => this.loadDataPoints(),
      ( err ) => console.log( err )
    );
  }

  private loadDataPoints() : void {

    this.marketDataService.queryItems( this.query ).subscribe(
        ( dataPoints : MarketDataPoint[] ) => this.dataPoints = dataPoints,
        ( err ) => console.log( err )
    );
  }

  private sortBy( fieldName : string ) : void {

    if ( this.query.sort == fieldName ) {
      this.query.order = this.query.order * -1;
    } else {
      this.query.sort = fieldName;
      this.query.order = 1;
    }

    this.loadDataPoints();
  }

  private setFilter( fieldName, event ) {

    this.query[fieldName] = event.target.value;
    this.loadDataPoints();

    console.log( this.query );
  }

}
