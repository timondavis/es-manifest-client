import { Component, OnInit } from '@angular/core';
import { MarketDataService } from "../market-data.service";
import { MarketReportService } from "../market-report.service";
import { MarketDataPoint } from "../market-data-point";

@Component({
  selector: 'spcc-market-speculation',
  templateUrl: './market-speculation.component.html',
  styleUrls: ['./market-speculation.component.css']
})
export class MarketSpeculationComponent implements OnInit {

  private minPriceData : MarketDataPoint;
  private meanPriceData : MarketDataPoint;
  private maxPriceData : MarketDataPoint;

  private minToMeanMargins : any;
  private meanToMaxMargins : any;
  private minToMaxMargins : any;

  constructor( private marketDataService : MarketDataService, private marketReportService : MarketReportService ) {

    this.initializeMargins();
  }

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

  public updateReport( collection : MarketDataPoint[] ) {

    this.minPriceData = MarketReportService.buildMinPriceDataReport( collection );
    this.meanPriceData = MarketReportService.buildMeanPriceDataReport( collection );
    this.maxPriceData = MarketReportService.buildMaxPriceDataReport( collection );

    this.updateMinToMean();
    this.updateMeanToMax();
    this.updateMinToMax();
  }

  public updateMinToMean() {

    this.minToMeanMargins.food             = this.minToMeanMargin( 'food' );
    this.minToMeanMargins.clothing         = this.minToMeanMargin( 'clothing' );
    this.minToMeanMargins.metal            = this.minToMeanMargin( 'metal' );
    this.minToMeanMargins.plastic          = this.minToMeanMargin( 'plastic' );
    this.minToMeanMargins.equipment        = this.minToMeanMargin( 'equipment' );
    this.minToMeanMargins.medical          = this.minToMeanMargin( 'medical' );
    this.minToMeanMargins.industrial       = this.minToMeanMargin( 'industrial' );
    this.minToMeanMargins.electronics      = this.minToMeanMargin( 'electronics' );
    this.minToMeanMargins.heavyMetals      = this.minToMeanMargin( 'heavyMetals' );
    this.minToMeanMargins.luxuryGoods      = this.minToMeanMargin( 'luxuryGoods' );
  }

  public updateMeanToMax() {

    this.meanToMaxMargins.food             = this.meanToMaxMargin( 'food' );
    this.meanToMaxMargins.clothing         = this.meanToMaxMargin( 'clothing' );
    this.meanToMaxMargins.metal            = this.meanToMaxMargin( 'metal' );
    this.meanToMaxMargins.plastic          = this.meanToMaxMargin( 'plastic' );
    this.meanToMaxMargins.equipment        = this.meanToMaxMargin( 'equipment' );
    this.meanToMaxMargins.medical          = this.meanToMaxMargin( 'medical' );
    this.meanToMaxMargins.industrial       = this.meanToMaxMargin( 'industrial' );
    this.meanToMaxMargins.electronics      = this.meanToMaxMargin( 'electronics' );
    this.meanToMaxMargins.heavyMetals      = this.meanToMaxMargin( 'heavyMetals' );
    this.meanToMaxMargins.luxuryGoods      = this.meanToMaxMargin( 'luxuryGoods' );
  }

  public updateMinToMax() {

    this.minToMaxMargins.food             = this.minToMaxMargin( 'food' );
    this.minToMaxMargins.clothing         = this.minToMaxMargin( 'clothing' );
    this.minToMaxMargins.metal            = this.minToMaxMargin( 'metal' );
    this.minToMaxMargins.plastic          = this.minToMaxMargin( 'plastic' );
    this.minToMaxMargins.equipment        = this.minToMaxMargin( 'equipment' );
    this.minToMaxMargins.medical          = this.minToMaxMargin( 'medical' );
    this.minToMaxMargins.industrial       = this.minToMaxMargin( 'industrial' );
    this.minToMaxMargins.electronics      = this.minToMaxMargin( 'electronics' );
    this.minToMaxMargins.heavyMetals      = this.minToMaxMargin( 'heavyMetals' );
    this.minToMaxMargins.luxuryGoods      = this.minToMaxMargin( 'luxuryGoods' );
  }

  public minToMeanMargin( commodityName : string ) : number {

    let difference =
      this.meanPriceData.getCost( commodityName )
    - this.minPriceData.getCost( commodityName );

    return difference / this.minPriceData.getCost( commodityName ) * 100;
  }

  public meanToMaxMargin( commodityName : string ) : number {

    let difference =
      this.maxPriceData.getCost( commodityName )
    - this.meanPriceData.getCost( commodityName );

    return difference / this.meanPriceData.getCost( commodityName ) * 100;
  }

  public minToMaxMargin( commodityName : string ) : number {

    let difference =
      this.maxPriceData.getCost( commodityName )
    - this.minPriceData.getCost( commodityName );

    return difference / this.minPriceData.getCost( commodityName ) * 100;
  }

  private initializeMargins() {

    this.minToMaxMargins = {
      food: 0,
      clothing: 0,
      metal : 0,
      plastic : 0,
      equipment : 0,
      medical : 0,
      industrial : 0,
      electronics : 0,
      heavyMetals : 0,
      luxuryGoods : 0
    };

    this.minToMeanMargins = {
      food: 0,
      clothing: 0,
      metal : 0,
      plastic : 0,
      equipment : 0,
      medical : 0,
      industrial : 0,
      electronics : 0,
      heavyMetals : 0,
      luxuryGoods : 0
    };

    this.meanToMaxMargins = {
      food: 0,
      clothing: 0,
      metal : 0,
      plastic : 0,
      equipment : 0,
      medical : 0,
      industrial : 0,
      electronics : 0,
      heavyMetals : 0,
      luxuryGoods : 0
    };
  }
}
