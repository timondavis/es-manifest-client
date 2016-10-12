import { Injectable, Output, EventEmitter } from '@angular/core';
import { MarketDataPoint } from "./market-data-point";
import { Observable } from "rxjs";
import { Headers, RequestOptions, Response, Http } from "@angular/http";
import { Commodity } from "./commodity";

@Injectable()
export class MarketDataService {

  @Output() itemPosted : EventEmitter<string> = new EventEmitter<string>();
  @Output() itemsCollected : EventEmitter<MarketDataPoint[]> = new EventEmitter<MarketDataPoint[]>();
  @Output() itemsDeleted : EventEmitter<string> = new EventEmitter<string>();

  private itemURL = 'http://localhost:3000/market/data';

  constructor( private http : Http ) { }

  getItems() : Observable<MarketDataPoint[]> {

    return this.http.get( this.itemURL )
      .map( ( res : Response ) => this.handleGetItems( res ) )
      .catch( ( err ) => Observable.throw( err ) );
  }

  deleteItem( item : MarketDataPoint ) : Observable<Object> {

    let url = this.itemURL + '/' + item._id;

    return this.http.delete( url )
        .map( ( res : Response ) => this.handleDeleteItem( res ) )
        .catch( ( error: any ) => Observable.throw( error || 'Server Error ' ) );
  }

  private handleDeleteItem( response ) {

    let adjustedResponse = response.json();
    this.itemsDeleted.emit( adjustedResponse );
    return adjustedResponse;
  }

  queryItems( queryObject : {} ) : Observable<MarketDataPoint[]> {

    let qString = '';

    for ( var propertyName in queryObject ) {

      if ( queryObject.hasOwnProperty( propertyName ) ) {
        qString += '?' + propertyName + '=' + queryObject[ propertyName ];
      }
    }

    return this.http.get( this.itemURL + qString )
        .map( ( res : Response ) => this.handleGetItems ( res ) )
        .catch( ( err ) => Observable.throw( err ) );
  }

  pushItem( item : MarketDataPoint ) : Observable<MarketDataPoint[]> {

    let body = JSON.stringify( item );
    let headers = new Headers( { 'Content-Type': 'application/json' } );
    let options = new RequestOptions( { headers: headers } );

    return this.http.post( this.itemURL, body, options )
      .map( ( res : Response ) => this.handlePushItem( res ) )
      .catch( ( err ) => Observable.throw( err ) );
  }

  /**
   * Get the lowest recorded market rate for a given commodity from a collection of market data points.
   *
   * @param collection {MarketDataPoint[]}
   * @param commodityName {string}
   * @returns {number}
   */
  public static getLowestPriceForCommodity( collection : MarketDataPoint[], commodityName : string ) : number {

      return MarketDataService.getMinOrMaxPriceForCommodity( collection, commodityName );
  }

  /**
   * Get the highest recorded market rate for a given commodity from a collection of market data points.
   *
   * @param collection {MarketDataPoint[]}
   * @param commodityName {string}
   * @returns {number}
   */
  public static getHighPriceForCommodity( collection : MarketDataPoint[], commodityName : string ) : number {

    return MarketDataService.getMinOrMaxPriceForCommodity( collection, commodityName, 'max' );
  }

  /**
   * Get the mean average price for a given commodity from a collection of marekt data points.
   *
   * @param collection {MarketDataPoint[]}
   * @param commodityName  {string}
   * @returns {number}
   */
  public static getMeanAveragePriceForCommodity( collection : MarketDataPoint[], commodityName : string ) : number {

    let dataPoint : MarketDataPoint;
    let pointsCounted : number = 0;
    let accumulatedCost : number = 0;

    for ( let i = 0 ; i < collection.length ; i++ ) {

      dataPoint = collection[i];

      if ( dataPoint.getCost( commodityName ) !== false ) {

        pointsCounted++;
        accumulatedCost = accumulatedCost + dataPoint.getCost( commodityName );
      }
    }

    return ( accumulatedCost / pointsCounted );
  }

  /**
   * Get the minimum or maximum number for a given commodity in a collection of market data points
   *
   * @param collection {MarketDataPoint[]}
   * @param commodityName {Commodity}
   * @param mode {string}  'min', 'max'
   * @returns {number}
   */
  private static getMinOrMaxPriceForCommodity( collection : MarketDataPoint[], commodityName : string, mode : string = 'min' ) : number {

    let dataPoint : MarketDataPoint;
    let val : number;

    // Traverse through the data points
    for( let i = 0 ; i < collection.length ; i++ ) {

      dataPoint = collection[i];

      // If this data point has a commodity with a matching name, compare the values
      if ( dataPoint.getCost( commodityName ) !== false ) {

        // If the value of the given data point is the initial node, or it is lower than the current minimum value,
        // replace that value.
        if ( val == null ) { val = dataPoint.getCost( commodityName ); }

        switch ( mode ) {

          case( 'max' ): {

            if ( dataPoint.getCost( commodityName ) > val ) { val = dataPoint.getCost( commodityName ); }
            break;
          }
          case( 'min' ):
          default:  {

            if ( dataPoint.getCost( commodityName ) < val ) { val = dataPoint.getCost( commodityName ); }

          }
        }
      }
    }

    return val;
  }

  private handleGetItems( response ) {

    let responseObject = JSON.parse( response._body );
    this.itemsCollected.emit( responseObject );

    return this.hydrateCollection( responseObject );
  }

  private handlePushItem( response )  {

    this.itemPosted.emit( response );
  }

  private hydrateCollection( rawCollection : any[] ) : MarketDataPoint[] {

    let hydratedCollection : MarketDataPoint[] = [];

    for ( let i = 0 ; i < rawCollection.length ; i++ ) {

      let item = new MarketDataPoint(rawCollection[i]);

      hydratedCollection.push( item );
    }

    return hydratedCollection;

  }

}
