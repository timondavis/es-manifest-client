import { Commodity } from "./commodity";

export class MarketDataPoint {

  public _id  : string = '';
  public date : string = '';
  public planet : string = '';
  public region : string = '';
  public commodities : Commodity[] = [];

  /**
   * Default constructor
   */
  constructor( args : any ) {
    try {

      this._id          = args._id;
      this.date         = args.date;
      this.planet       = args.planet;
      this.region       = args.region;
      this.loadCommoditiesFromDocument( args.commodities );
    }
    catch( e ) {
      throw e;
    }
  }

  /**
   * Load in the expected mongo schema instance
   * @param src
   */
  public hydrateFromDocument( src : any ) {

    this.constructor({ '_id': src._id, 'date': src.date, 'planet': src.planet, 'region': src.region, 'commodities': src.commodities });
  }


  /**
   * Get the commodity index for a given commodity name
   *
   * @param name  The name of the commodity
   * @returns {number}  Will return index number, or negative 1 (-1) if not found
   */
  public getIndex( name : string ) : number {

    for( let i = 0 ; i < this.commodities.length ; i++ ) {
      if ( this.commodities[i].name == name ) {
        return i;
      }
    }

    return -1;
  }

  /**
   * Get a commodity from the commodity collection on this market data point
   * @param name
   * @returns {any}  (false if not found, Commodity if true )
   */
  public getCommodity( name : string ) : any {

    for( let i = 0 ; i < this.commodities.length ; i++ ) {
      if ( this.commodities[i].name == name ) {
        return this.commodities[i];
      }
    }
  }

  /**
   * Get the cost associated with the named commodity
   *
   * @param name
   * @returns {any}  Returns false if not found
   */
  public getCost( name : string ) : any {

    let c = this.getCommodity( name );

    if ( c ) { return c.cost; }
    return false;
  }

  /**
   * Update or assign the cost of a given commodity
   * @param name {string}
   * @param cost
   */
  public setCost( name : string, cost : number ) {

    let c = this.getCommodity( name );

    if ( c ) { c.cost = cost; }
  }

  /**
   * Adds a commodity to the dataset.
   *
   * @param c {Commodity}
   */
  public add( c : Commodity ) {

    // Dont allow duplicates
    if ( ! this.getCommodity( c.name ) ) {
      this.commodities.push( c );
    }
  }

  /**
   * Use expected document schema to hydrate the commodity instances
   *
   * @param commodities {any}  Should be instances of the Commodity served up by the mother server
   */
  private loadCommoditiesFromDocument( commodities : any[] ) {

    for( var i = 0 ; i < commodities.length ; i++ ) {

      let c = new Commodity({ '_id': commodities[i]._id, 'name': commodities[i].name, 'cost': commodities[i].cost});

      this.add( c );
    }
  }
}
