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

  constructor( private listItemService : ManifestDataService ) {

    this.listItemService.pushItemEmitter.subscribe(

        items => this.loadItems(), //this.manifestListItems = items,
        err => console.log( err )
    );

    this.listItemService.deleteItemEmitter.subscribe(

        items => this.loadItems(),
        err => console.log( err )
    );

  };

  public onItemClick( item : ManifestItem ) {

    this.listItemService.triggerItemSelected( item );
  }

  ngOnInit() {

    this.loadItems();
  }

  private loadItems() {

    this.listItemService.getItems().subscribe(

        items => this.manifestListItems = items,
        err => console.log( err )
    );
  }
}
