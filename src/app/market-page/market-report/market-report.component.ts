import { Component, OnInit } from '@angular/core';
import { MarketDataPoint } from "../market-data-point";
import { MarketDataService } from "../market-data.service";
import { Commodity } from "../commodity";

@Component({
  selector:     'spcc-market-report',
  templateUrl:  './market-report.component.html',
  styleUrls:    ['./market-report.component.css']
})
export class MarketReportComponent implements OnInit {

  private minPriceData : MarketDataPoint;
  private meanPriceData : MarketDataPoint;
  private maxPriceData : MarketDataPoint;

  constructor( private marketDataService : MarketDataService ) { }

  ngOnInit() {

    this.marketDataService.getItems().subscribe(
        ( collection : MarketDataPoint[] ) => this.updateReport( collection ),
        ( err ) => console.log( err )
    );
  }

  public updateReport( collection : MarketDataPoint[] ) : void {

    this.buildMinPriceDataReport( collection );
    this.buildMeanPriceDataReport( collection );
    this.buildMaxPriceDataReport( collection );
  }

  protected buildMinPriceDataReport( collection : MarketDataPoint[] ) {

    this.minPriceData = new MarketDataPoint( { 'planet': 'minPricing', 'commodities' : [] } );
    this.minPriceData.commodities = MarketReportComponent.buildCommoditySet();

    this.minPriceData.setCost( 'food', MarketDataService.getLowestPriceForCommodity( collection, 'food' ) );
    this.minPriceData.setCost( 'clothing', MarketDataService.getLowestPriceForCommodity( collection, 'clothing' ) );
    this.minPriceData.setCost( 'metal', MarketDataService.getLowestPriceForCommodity( collection, 'metal' ) );
    this.minPriceData.setCost( 'plastic', MarketDataService.getLowestPriceForCommodity( collection, 'plastic' ) );
    this.minPriceData.setCost( 'equipment', MarketDataService.getLowestPriceForCommodity( collection, 'equipment' ) );
    this.minPriceData.setCost( 'medical', MarketDataService.getLowestPriceForCommodity( collection, 'medical' ) );
    this.minPriceData.setCost( 'industrial', MarketDataService.getLowestPriceForCommodity( collection, 'industrial' ) );
    this.minPriceData.setCost( 'electronics', MarketDataService.getLowestPriceForCommodity( collection, 'electronics' ) );
    this.minPriceData.setCost( 'heavyMetals', MarketDataService.getLowestPriceForCommodity( collection, 'heavyMetals' ) );
    this.minPriceData.setCost( 'luxuryGoods', MarketDataService.getLowestPriceForCommodity( collection, 'luxuryGoods' ) );
  }

  protected buildMeanPriceDataReport( collection : MarketDataPoint[] ) {

    this.meanPriceData = new MarketDataPoint( { 'planet': 'minPricing', 'commodities' : [] } );
    this.meanPriceData.commodities = MarketReportComponent.buildCommoditySet();
    this.meanPriceData.setCost( 'food', MarketDataService.getMeanAveragePriceForCommodity( collection, 'food' ) );
    this.meanPriceData.setCost( 'clothing', MarketDataService.getMeanAveragePriceForCommodity( collection, 'clothing') );
    this.meanPriceData.setCost( 'metal', MarketDataService.getMeanAveragePriceForCommodity( collection, 'metal') );
    this.meanPriceData.setCost( 'plastic', MarketDataService.getMeanAveragePriceForCommodity( collection, 'plastic') );
    this.meanPriceData.setCost( 'equipment', MarketDataService.getMeanAveragePriceForCommodity( collection, 'equipment') );
    this.meanPriceData.setCost( 'medical', MarketDataService.getMeanAveragePriceForCommodity( collection, 'medical') );
    this.meanPriceData.setCost( 'industrial', MarketDataService.getMeanAveragePriceForCommodity( collection, 'industrial') );
    this.meanPriceData.setCost( 'electronics', MarketDataService.getMeanAveragePriceForCommodity( collection, 'electronics') );
    this.meanPriceData.setCost( 'heavyMetals', MarketDataService.getMeanAveragePriceForCommodity( collection, 'heavyMetals') );
    this.meanPriceData.setCost( 'luxuryGoods', MarketDataService.getMeanAveragePriceForCommodity( collection, 'luxuryGoods') );
  }

  protected buildMaxPriceDataReport( collection : MarketDataPoint[] ) {

    this.maxPriceData = new MarketDataPoint( { 'planet': 'minPricing', 'commodities' : [] } );
    this.maxPriceData.commodities = MarketReportComponent.buildCommoditySet();
    this.maxPriceData.setCost( 'food', MarketDataService.getHighPriceForCommodity( collection, 'food' ) );
    this.maxPriceData.setCost( 'clothing', MarketDataService.getHighPriceForCommodity( collection, 'clothing' ) );
    this.maxPriceData.setCost( 'metal', MarketDataService.getHighPriceForCommodity( collection, 'metal' ) );
    this.maxPriceData.setCost( 'plastic', MarketDataService.getHighPriceForCommodity( collection, 'plastic' ) );
    this.maxPriceData.setCost( 'equipment', MarketDataService.getHighPriceForCommodity( collection, 'equipment' ) );
    this.maxPriceData.setCost( 'medical', MarketDataService.getHighPriceForCommodity( collection, 'medical' ) );
    this.maxPriceData.setCost( 'industrial', MarketDataService.getHighPriceForCommodity( collection, 'industrial' ) );
    this.maxPriceData.setCost( 'electronics', MarketDataService.getHighPriceForCommodity( collection, 'electronics' ) );
    this.maxPriceData.setCost( 'heavyMetals', MarketDataService.getHighPriceForCommodity( collection, 'heavyMetals' ) );
    this.maxPriceData.setCost( 'luxuryGoods', MarketDataService.getHighPriceForCommodity( collection, 'luxuryGoods' ) );
  }



  protected static buildCommoditySet() {

    return [
      new Commodity({ 'name': 'food', 'cost': 0 }),
      new Commodity({ 'name': 'clothing', 'cost': 0 }),
      new Commodity({ 'name': 'metal', 'cost': 0 }),
      new Commodity({ 'name': 'plastic', 'cost': 0 }),
      new Commodity({ 'name': 'equipment', 'cost': 0 }),
      new Commodity({ 'name': 'medical', 'cost': 0 }),
      new Commodity({ 'name': 'industrial', 'cost': 0 }),
      new Commodity({ 'name': 'electronics', 'cost': 0 }),
      new Commodity({ 'name': 'heavyMetals', 'cost': 0 }),
      new Commodity({ 'name': 'luxuryGoods', 'cost': 0 })
    ];
  }



}
