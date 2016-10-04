export class Commodity {

  public _id  : string;
  public name : string;
  public cost : number;

  constructor( args : any ) {

    try {
      this._id = args._id;
      this.name = args.name;
      this.cost = args.cost;
    }
    catch ( e ) {

      throw e;
    }
  }

  hydrateFromDocument( src : any ) {

    this.constructor({ '_id': src._id, 'name': src.name, 'cost': src.cost });
  }




}
