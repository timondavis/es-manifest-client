import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ManifestItem } from '../manifest-item';
import { ManifestDataService } from "../manifest-data.service";

@Component({
  selector: 'spcc-manifest-list',
  templateUrl: './manifest-list.component.html',
  styleUrls: ['./manifest-list.component.css']
})
export class ManifestListComponent implements OnInit {

  public manifestListItems : ManifestItem[];

  constructor( private listItemService : ManifestDataService ) { };

  ngOnInit() {

    this.loadItems();
  }

  private loadItems() {

    this.listItemService.getItems().subscribe(
        items => this.hydrateItems( items ),// this.manifestListItems = items,
        err => console.log( err )
    );
  }

  private hydrateItems( items ) : void {

    var itemsArray : ManifestItem[] = [];

    for( var i = 0 ; i < items.length ; i++ ) {

      itemsArray[i] = new ManifestItem( items[i] );
    }

    this.manifestListItems = itemsArray;
  }


}
