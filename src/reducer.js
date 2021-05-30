export const initialState ={
basket:[
    {
    id : "1",
title : 'Psychedelics: Weve Been Lied To',
image : 'https://images-na.ssl-images-amazon.com/images/I/316RIAZWZ3L._SX323_BO1,204,203,200_.jpg',     
price : 20.99,
rating : 4
    },
],
user: null,
};

export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer=(state,action)=>{
    console.log(action);
    switch(action.type){

        case "SET_USER":
            return {
              ...state,
              user: action.user
            }

        case "ADD_TO_BASKET":
            return{
            ...state,
            basket:[...state.basket,action.item]
            };
   

            case "REMOVE_FROM_BASKET":
                //Logic to remove item from Basket
                let newBasket =[state.basket];  //create a clone basket to store the new basket after removing the element
                const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id);//a find function to search if the item is actually there in the cart
                if(index>=0){
                    newBasket.splice(index,1);  //slic the item from the basket array
                }
                else{
                    console.warn(
                    'cant remove'
                    );
                }
            return{...state,basket:newBasket};

 
        
        default:
            return state;


    }
}

export default reducer;