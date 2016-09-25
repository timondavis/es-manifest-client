import { Injectable, EventEmitter } from '@angular/core';
import { ManifestItem } from "./manifest-item";
import { Response, Headers, RequestOptions, Http } from '@angular/http';
import { Observable } from "rxjs";
import { Output } from "@angular/core";

@Injectable()
export class ManifestDataService {

  private getResult : any[];

  private getAllUrl = 'http://localhost:3000/manifest/all';
  private postItemUrl = 'http://localhost:3000/manifest/create-item';

  @Output() getItemsEmitter : EventEmitter<ManifestItem[]> = new EventEmitter<ManifestItem[]>();
  @Output() pushItemEmitter : EventEmitter<ManifestItem> = new EventEmitter<ManifestItem>();

  constructor( private http : Http ) { }

  getItems() : Observable<ManifestItem[]> {

    return this.http.get( this.getAllUrl )
      .map( ( res: Response ) => this.handleGetItems( res ) )
      .catch( ( error: any ) => Observable.throw( error || 'Server Error' ) );
  }

  pushItem( item : ManifestItem ) : Observable<ManifestItem[]> {

    let body = JSON.stringify( item );
    let headers = new Headers( { 'Content-Type': 'application/json' } );
    let options = new RequestOptions( { headers: headers } );

    return this.http.post( this.postItemUrl, body, options )
      .map( ( res : Response ) => this.handlePushItem( res ) )
      .catch( ( err ) => Observable.throw( err ) );
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
