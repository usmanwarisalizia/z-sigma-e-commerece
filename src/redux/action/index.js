// FOR ADD ITEM TO CART

export const addCart = (Product) => {
    return{
        type: "ADDCART",
        payload: Product
    }
}

// FOR DELETE ITEM FROM CART

export const  delCart = (Product) =>{
    return{
        type: "DELITEM",
        payload: Product
    }
}


export const delProductCart = (product) => {
    debugger
    return {
        type: "DELETE_PRODUCT_FROM_CART",
        payload: product // Pass the entire product object to the reducer
    };
};



// For Add To cart
export const addFav = (product) => {
    return {
        type: "ADDFAV",
        payload: product
    }
}


// For del To cart
export const delFav = (product) => {
    return {
        type: "DELFAV",
        payload: product
    }
}

// Action creator for removing a product from favorites
export const removeFav = (product) => {
    return {
        type: "REMOVE_FAV",
        payload: product,
    };
};

export const CLEAR_FAV = (product) => {
    return {
        type: "CLEAR_FAV",
        payload: product,
    }
}


export const CLEAR_CART = (product) => {
    return {
        type: "CLEAR_CART",
        payload: product,
    }
}