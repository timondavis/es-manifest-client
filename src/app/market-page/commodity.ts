export class Commodity {

  public _id  : string;
  public name : string;
  public cost : number;

  constructor() {}

  hydrate( _id : string, name : string, cost : number ) {

    this._id   = _id;
    this.name = name;
    this.cost = cost;
  }

  hydrateFromDocument( src : any ) {

    this.constructor( src._id, src.name, src.cost );
  }




}
