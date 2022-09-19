import { ADD_TO_CART } from "./constant";
export const cartData = (data = [], action) => {
    
    switch(action.type){
        case ADD_TO_CART:
            console.log('add to cart called');
            return [action.data,...data];
           

default:
    return data
            
    }
};
