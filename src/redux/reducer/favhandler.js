const favhandler = (state = [], action) => {
    const product = action.payload;

    switch (action.type) {
        case "ADDFAV":
           
            const existsInFavorites = state.some((x) => x.id === product.id);

            if (existsInFavorites) {
                return state; 
            } else {
             
                return [...state, product];
            }

        case "DELFAV":
    
            return state.filter((x) => x.id !== product.id);
       
        case "REMOVE_FAV":
            return state.filter((x) => x.id !== product.id);

        case "CLEAR_FAV":
            
            return [];

        default:
            return state;
    }
};

export default favhandler;
