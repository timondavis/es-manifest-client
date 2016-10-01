import { Commodity } from "./commodity";

export class MarketDataPoint {

    public date : string = '';
    public planet : string = '';
    public region : string = '';
    public commodities : Commodity[] = [];

    /**
     * Get the commodity index for a given commodity name
     *
     * @param name  The name of the commodity
     * @returns {number}  Will return index number, or negative 1 (-1) if not found
     */
    get getIndex( name : string ) : number {

        for( let i = 0 ; i < this.commodities.length ; i++ ) {
            if ( commodities[i].name == name ) {
                return i;
            }
        }

        return false;
    }

    get getCommodity( name : string ) : any {

        for( let i = 0 ; i < this.commodities.length ; i++ ) {
            if ( commodities[i].name == name ) {
                return commodities[i];
            }
        }
    }

    get getCost( name : string ) : any {

        let c = this.getCommodity( name );

        if ( c ) { return c.cost; }
        return false;
    }

    set setCost( name : string, cost : number ) {

        let c = this.getCommodity( string );

        if ( c ) { c.cost = cost; }
    }

    set add( c : Commodity ) {

        // Dont allow duplicates
        if ( ! this.getCommodity( c.name ) ) {
            commodities.push( c );
        }
    }




}
