import { Component, OnInit } from '@angular/core';
import { MarketDataService } from "../market-data.service";
import { Response } from "@angular/http";
import { MarketDataPoint } from "../market-data-point";

@Component({
  selector: 'spcc-market-history',
  templateUrl: './market-history.component.html',
  styleUrls: ['./market-history.component.css']
})
export class MarketHistoryComponent implements OnInit {

  private dataPoints : MarketDataPoint[];

  constructor( private marketDataService : MarketDataService ) { }

  ngOnInit() {

    this.marketDataService.itemPosted.subscribe(
        ( dataPoints : MarketDataPoint[] ) => this.dataPoints = dataPoints,
        ( err ) => console.log( err )
    );

    this.marketDataService.getItems().subscribe(
        ( dataPoints : MarketDataPoint[] ) => this.dataPoints = dataPoints,
        ( err ) => console.log( err )
    );
  }
}
