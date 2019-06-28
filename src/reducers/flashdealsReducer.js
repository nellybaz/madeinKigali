import {FETCH_FLASHDEALS, DISPLAY_FLASHDEALS} from '../actions/types';
 

const initialState = {
    items:[
        {

        }
    ]
}


export default function(state = initialState, action){

    switch (action.type) {
        case FETCH_FLASHDEALS:
        console.log("called dispatcher");
        
            return {
                ...state,
                items: action.payload
            }
        
        // case DISPLAY_FLASHDEALS:
        //     return {
        //         ...state,

        //     }
    
        default:
            return state;
    }
}