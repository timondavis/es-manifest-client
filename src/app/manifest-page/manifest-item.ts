export class ManifestItem {

    protected _id : string;
    protected value : number = 0;
    protected dateReceived : string;
    protected commodityName : string;
    protected unitPrice : number;
    protected tonnage : number;
    protected expiry : string = '-';

    public constructor( args ) {

      try {
        this._id = args.id;
        this.dateReceived = args.dateReceived;
        this.commodityName  = args.commodityName;
        this.unitPrice = args.unitPrice;
        this.tonnage = args.tonnage;
        this.expiry = args.expiry;
        this.value = this.unitPrice * this.tonnage;
      }
      catch ( e ) {
          throw e;
      }
    }

    /**
     * Get the date on which the commodity was received
     * @returns {string}
     */
    public getDateReceived() {
        return this.dateReceived;
    }

    /**
     * Get the name of the commodity
     * @returns {string}
     */
    public getCommodityName() {
        return this.commodityName;
    }

    /**
     * Get the unit price fo the commodity
     * @returns {number}
     */
    public getUnitPrice() {
        return this.unitPrice;
    }

    /**
     * Get the tonnage acquired during the transaction
     * @returns {number}
     */
    public getTonnage() {
        return this.tonnage;
    }

    /**
     * If it exists, get the expiration date
     * @returns {string}
     */
    public getExpirationDate() {
        return this.expiry
    }


    /**
     * Get the value for this manifest record
     * (tonnage * unit price)
     *
     * @returns {number}
     */
    public getRecordValue() {
        return this.value;
    }

    /**
     * Update the date recieved for the record
     * @param date
     */
    public updateDateReceived( date : string ) {
        this.dateReceived = date;
    }

    /**
     * Update the name of the commodity on record
     * @param name
     */
    public updateCommodityName( name : string ) {
        this.commodityName = name;
    }

    /**
     * Update the unit price for the commodity at the time received
     * @param value
     */
    public updateUnitPrice( value : number ) {
        this.unitPrice = value;
    }

    /**
     * Update the amount of tonnage acquired on acquisition
     * @param value
     */
    public updateTonnage( value : number ) {
        this.tonnage = value;
    }

    /**
     * Update the expiration date for the given commodity bundle
     * @param date
     */
    public updateExpirationDate( date : string ) {
       this.expiry = date;
    }

}