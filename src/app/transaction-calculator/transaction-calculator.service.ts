import { Injectable, Output, EventEmitter } from '@angular/core';
import { ManifestItem } from "../manifest-page/manifest-item";
import { ManifestDataService } from "../manifest-page/manifest-data.service";

@Injectable()
export class TransactionCalculatorService {

  @Output( 'manifestItemSelected' ) manifestItemSelected : EventEmitter<ManifestItem> = new EventEmitter<ManifestItem>();

  constructor( private manifestDataService : ManifestDataService ) {

      this.manifestDataService.itemSelectedEmitter.subscribe(
          ( item ) => this.manifestItemSelected.emit( item ),
          ( err ) => console.log( err )
      );
  }

}
