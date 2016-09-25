import { Component, OnInit } from '@angular/core';
import { ManifestItem } from "../manifest-item";

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

  constructor() {

 }

  ngOnInit() {
  }

  postItem( event ) {

      console.log( JSON.stringify( this.model ) );
      event.preventDefault();
  }
}
