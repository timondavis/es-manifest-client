import { Injectable, EventEmitter } from '@angular/core';
import { ManifestItem } from "./manifest-item";
import { Response, Headers, RequestOptions, Http } from '@angular/http';
import { Observable } from "rxjs";
import { Output } from "@angular/core";

@Injectable()
export class ManifestDataService {

  private getResult : any[];

  private itemURL = 'http://localhost:3000/manifest';

  @Output() getItemsEmitter : EventEmitter<ManifestItem[]> = new EventEmitter<ManifestItem[]>();
  @Output() pushItemEmitter : EventEmitter<ManifestItem> = new EventEmitter<ManifestItem>();
  @Output() deleteItemEmitter : EventEmitter<Object> = new EventEmitter<Object>();

  constructor( private http : Http ) { }

  getItems() : Observable<ManifestItem[]> {

    return this.http.get( this.itemURL )
      .map( ( res: Response ) => this.handleGetItems( res ) )
      .catch( ( error: any ) => Observable.throw( error || 'Server Error' ) );
  }

  pushItem( item : ManifestItem ) : Observable<ManifestItem[]> {

    let body = JSON.stringify( item );
    let headers = new Headers( { 'Content-Type': 'application/json' } );
    let options = new RequestOptions( { headers: headers } );

    return this.http.post( this.itemURL, body, options )
      .map( ( res : Response ) => this.handlePushItem( res ) )
      .catch( ( err ) => Observable.throw( err ) );
  }

  deleteItem( item : ManifestItem ) : Observable<Object> {

    let url = this.itemURL + '/' + item.getID();

    return this.http.delete( url )
        .map( ( res : Response ) => this.handleDeleteItem( res ) )
        .catch( ( error: any ) => Observable.throw( error || 'Server Error ' ) );
  }

  private handleDeleteItem( response ) {

    let adjustedResponse = response.json();
    this.deleteItemEmitter.emit( adjustedResponse );
    return adjustedResponse;
  }


  private handleGetItems( response ) {

    let jsonResponse = response.json();
    let processedItems = this.hydrateItems( jsonResponse );
    this.getItemsEmitter.emit( processedItems );
    return processedItems;
  }

  private handlePushItem( response ) {

    let jsonResponse = response.json();
    let processedItem = this.hydrateItem( jsonResponse );
    this.pushItemEmitter.emit( processedItem );
    return processedItem;
  }

  private hydrateItem( item ) : ManifestItem {

    return new ManifestItem( item );
  }

  private hydrateItems( items ) : ManifestItem[] {

    var itemsArray : ManifestItem[] = [];

    for( var i = 0 ; i < items.length ; i++ ) {

      itemsArray[i] = new ManifestItem( items[i] );
    }

    return itemsArray;
  }
}
