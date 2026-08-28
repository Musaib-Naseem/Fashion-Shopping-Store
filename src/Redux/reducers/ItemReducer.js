
const initialState={

    items:[]

}


export const ItemReducer=(state=initialState,{type,payload })=>{

  
    switch(type){

case "AddProducts":

return {items: [...state.items,payload] };

case "DeleteProducts":

const updatedItems = state.items.filter((data) => data !== payload);

console.log(state.items);

return { items:updatedItems };

default :

return state;


}


}