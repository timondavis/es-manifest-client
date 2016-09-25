import { Injectable } from '@angular/core';
import { ManifestItem } from "./manifest-item";
import { Response, Headers, RequestOptions, Http } from '@angular/http';
import { Observable } from "rxjs";

@Injectable()
export class ManifestDataService {

  private commentsUrl = 'http://localhost:3000/manifest/all';

  constructor( private http : Http ) { }

  getItems() : Observable<ManifestItem[]> {

    return this.http.get( this.commentsUrl )
      .map( ( res: Response ) => res.json() )
      .catch( ( error: any ) => Observable.throw( error || 'Server Error' ) );
  }

}
