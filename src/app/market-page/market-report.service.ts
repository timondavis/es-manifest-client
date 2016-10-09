import { Injectable } from '@angular/core';
import { MarketDataPoint } from "./market-data-point";
import { MarketDataService } from "./market-data.service";
import { Commodity } from "./commodity";

@Injectable()
export class MarketReportService {

  constructor( ) { }

  public static buildMinPriceDataReport( collection : MarketDataPoint[] ) : MarketDataPoint {

    let minPriceData = new MarketDataPoint( { 'planet': 'minPricing', 'commodities' : [] } );
    minPriceData.commodities = MarketReportService.commoditySet();

    minPriceData.setCost( 'food', MarketDataService.getLowestPriceForCommodity( collection, 'food' ) );
    minPriceData.setCost( 'clothing', MarketDataService.getLowestPriceForCommodity( collection, 'clothing' ) );
    minPriceData.setCost( 'metal', MarketDataService.getLowestPriceForCommodity( collection, 'metal' ) );
    minPriceData.setCost( 'plastic', MarketDataService.getLowestPriceForCommodity( collection, 'plastic' ) );
    minPriceData.setCost( 'equipment', MarketDataService.getLowestPriceForCommodity( collection, 'equipment' ) );
    minPriceData.setCost( 'medical', MarketDataService.getLowestPriceForCommodity( collection, 'medical' ) );
    minPriceData.setCost( 'industrial', MarketDataService.getLowestPriceForCommodity( collection, 'industrial' ) );
    minPriceData.setCost( 'electronics', MarketDataService.getLowestPriceForCommodity( collection, 'electronics' ) );
    minPriceData.setCost( 'heavyMetals', MarketDataService.getLowestPriceForCommodity( collection, 'heavyMetals' ) );
    minPriceData.setCost( 'luxuryGoods', MarketDataService.getLowestPriceForCommodity( collection, 'luxuryGoods' ) );

    return minPriceData;
  }

  public static buildMeanPriceDataReport( collection : MarketDataPoint[] ) : MarketDataPoint {

    let meanPriceData = new MarketDataPoint( { 'planet': 'minPricing', 'commodities' : [] } );
    meanPriceData.commodities = MarketReportService.commoditySet();

    meanPriceData.setCost( 'food', MarketDataService.getMeanAveragePriceForCommodity( collection, 'food' ) );
    meanPriceData.setCost( 'clothing', MarketDataService.getMeanAveragePriceForCommodity( collection, 'clothing') );
    meanPriceData.setCost( 'metal', MarketDataService.getMeanAveragePriceForCommodity( collection, 'metal') );
    meanPriceData.setCost( 'plastic', MarketDataService.getMeanAveragePriceForCommodity( collection, 'plastic') );
    meanPriceData.setCost( 'equipment', MarketDataService.getMeanAveragePriceForCommodity( collection, 'equipment') );
    meanPriceData.setCost( 'medical', MarketDataService.getMeanAveragePriceForCommodity( collection, 'medical') );
    meanPriceData.setCost( 'industrial', MarketDataService.getMeanAveragePriceForCommodity( collection, 'industrial') );
    meanPriceData.setCost( 'electronics', MarketDataService.getMeanAveragePriceForCommodity( collection, 'electronics') );
    meanPriceData.setCost( 'heavyMetals', MarketDataService.getMeanAveragePriceForCommodity( collection, 'heavyMetals') );
    meanPriceData.setCost( 'luxuryGoods', MarketDataService.getMeanAveragePriceForCommodity( collection, 'luxuryGoods') );

    return meanPriceData;
  }

  public static buildMaxPriceDataReport( collection : MarketDataPoint[] ) : MarketDataPoint {

    let maxPriceData = new MarketDataPoint( { 'planet': 'minPricing', 'commodities' : [] } );
    maxPriceData.commodities = MarketReportService.commoditySet();

    maxPriceData.setCost( 'food', MarketDataService.getHighPriceForCommodity( collection, 'food' ) );
    maxPriceData.setCost( 'clothing', MarketDataService.getHighPriceForCommodity( collection, 'clothing' ) );
    maxPriceData.setCost( 'metal', MarketDataService.getHighPriceForCommodity( collection, 'metal' ) );
    maxPriceData.setCost( 'plastic', MarketDataService.getHighPriceForCommodity( collection, 'plastic' ) );
    maxPriceData.setCost( 'equipment', MarketDataService.getHighPriceForCommodity( collection, 'equipment' ) );
    maxPriceData.setCost( 'medical', MarketDataService.getHighPriceForCommodity( collection, 'medical' ) );
    maxPriceData.setCost( 'industrial', MarketDataService.getHighPriceForCommodity( collection, 'industrial' ) );
    maxPriceData.setCost( 'electronics', MarketDataService.getHighPriceForCommodity( collection, 'electronics' ) );
    maxPriceData.setCost( 'heavyMetals', MarketDataService.getHighPriceForCommodity( collection, 'heavyMetals' ) );
    maxPriceData.setCost( 'luxuryGoods', MarketDataService.getHighPriceForCommodity( collection, 'luxuryGoods' ) );

    return maxPriceData;
  }

  public static commoditySet() {

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
