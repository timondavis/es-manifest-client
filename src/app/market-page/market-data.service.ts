import { Injectable, Output, EventEmitter } from '@angular/core';
import { MarketDataPoint } from "./market-data-point";
import { Observable } from "rxjs";
import { Headers, RequestOptions, Response, Http } from "@angular/http";

@Injectable()
export class MarketDataService {

  @Output() itemPosted : EventEmitter<string> = new EventEmitter<string>();

  private itemURL = 'http://localhost:3000/market/data';

  constructor( private http : Http) { }

  pushItem( item : MarketDataPoint ) : Observable<MarketDataPoint[]> {

    let body = JSON.stringify( item );
    let headers = new Headers( { 'Content-Type': 'application/json' } );
    let options = new RequestOptions( { headers: headers } );

    return this.http.post( this.itemURL, body, options )
      .map( ( res : Response ) => this.handlePushItem( res ) )
      .catch( ( err ) => Observable.throw( err ) );
  }

  handlePushItem( response )  {

    this.itemPosted.emit( response );
  }

}
