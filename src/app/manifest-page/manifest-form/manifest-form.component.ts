import { Component, OnInit, EventEmitter } from '@angular/core';
import { ManifestItem } from "../manifest-item";
import { ManifestDataService } from "../manifest-data.service";

@Component({
  selector: 'spcc-manifest-form',
  templateUrl: './manifest-form.component.html',
  styleUrls: ['./manifest-form.component.css']
})
export class ManifestFormComponent implements OnInit {

  public model = {
      dateReceived: '-',
      commodityName: '-',
      unitPrice: 0,
      tonnage: 0,
      expiry: '-'
  };

  constructor( private dataService : ManifestDataService ) {
  }

  ngOnInit() {
  }

  postItem( event ) {

      event.preventDefault();

      this.dataService.pushItem( new ManifestItem( this.model ) ).subscribe(
          ( data => {this.resetModel(); }),
          ( err => console.log( err ) )
      );
  }

  private resetModel() {
      this.model = {
          dateReceived: '-',
          commodityName: '-',
          unitPrice: 0,
          tonnage: 0,
          expiry: '-'
      };
  }
}
