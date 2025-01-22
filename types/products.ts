

export interface Products {
    _id : string;
    title : string;
   _type : "products";
    image? : {
        asset : {
            _ref : string;
            _type : "image";
         }
    };
    price : number;
    
    priceWithoutDiscount : number;
    badge :string;

    
    description? : Text;
    inventory : number;
    

}