import { FILTER_TODO } from "./todotype";
import { STATUS } from "../../status";

const intialState = STATUS.ALL

const filterReducer = (state=intialState,action) =>{
    switch(action.type){
        case FILTER_TODO: {

            return  action.payload.filter
               
            }
            default: return state
        
        
    }
}

export default filterReducer;
