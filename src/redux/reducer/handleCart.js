const cart = [];

const handleCart = (state = cart, action) => {
    const Product = action.payload;
    
    switch (action.type) {
        case "ADDCART":
            //  check if product is already exist
            const exist = state.find((x)=> x.id === Product.id);
            if(exist){
                return state.map((x)=>
            // Increase the Quantity
                    x.id === Product.id ? {...x, qty: x.qty + 1} : x
                );

            }
            else{
                const Product = action.payload;
                return[
                    ...state,
                    {
                        ...Product,
                        qty: 1,
                    }
                ]
            }
        
            break;
            case "DELITEM":
            const exist1 = state.find((x)=> x.id === Product.id);
            if(exist1.qty === 1){
                return state.filter((x)=> x.id !== exist1.id);
            }else{
                return state.map((x)=>
                    x.id === Product.id ? {...x, qty: x.qty-1} : x
                );
            }
            break;
            case "DELETE_PRODUCT_FROM_CART":
            // Filter out the product from the cart
            return state.filter((product) => product.id !== action.payload.id);
        case "CLEAR_CART":
            // Clear the cart by returning an empty array
            return [];
        default:
            return state;
            break;

    };

}
export default handleCart