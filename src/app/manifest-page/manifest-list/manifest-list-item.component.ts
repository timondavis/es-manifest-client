import { Component, Input, OnInit } from '@angular/core';
import { ManifestItem } from '../manifest-item';

@Component({
  selector: '[spcc-manifest-list-item]',
  templateUrl: './manifest-list-item.component.html',
  styleUrls: ['./manifest-list-item.component.css']
})
export class ManifestListItemComponent implements OnInit {

  @Input() manifestItem : ManifestItem;

  constructor() { }

  ngOnInit() {
  }

  public getManifestItem() {
    return this.manifestItem;
  }

}
