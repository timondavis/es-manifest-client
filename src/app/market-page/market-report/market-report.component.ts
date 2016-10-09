import { Component, OnInit } from '@angular/core';
import { MarketDataPoint } from "../market-data-point";
import { MarketDataService } from "../market-data.service";
import { Commodity } from "../commodity";
import { MarketReportService } from "../market-report.service";

@Component({
  selector:     'spcc-market-report',
  templateUrl:  './market-report.component.html',
  styleUrls:    ['./market-report.component.css']
})
export class MarketReportComponent implements OnInit {

  private minPriceData : MarketDataPoint;
  private meanPriceData : MarketDataPoint;
  private maxPriceData : MarketDataPoint;

  constructor( private marketDataService : MarketDataService, private marketReportService : MarketReportService ) { }

  ngOnInit() {

    this.marketDataService.getItems().subscribe(
      ( collection : MarketDataPoint[] ) => this.updateReport( collection ),
      ( err ) => console.log( err )
    );

    this.marketDataService.itemPosted.subscribe(
     ( res )  => this.marketDataService.getItems().subscribe(
       ( collection : MarketDataPoint[] ) => this.updateReport( collection ),
       ( err ) => console.log( err )
     ),
     ( err ) => console.log( err )
    );

  }

  public updateReport( collection : MarketDataPoint[] ) : void {

    this.minPriceData = MarketReportService.buildMinPriceDataReport( collection );
    this.meanPriceData = MarketReportService.buildMeanPriceDataReport( collection );
    this.maxPriceData = MarketReportService.buildMaxPriceDataReport( collection );
  }





}
