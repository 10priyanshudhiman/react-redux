import { FETCH_photos_FAILURE, ON_SEARCH_CHANGE } from "./photostypes";
import { FETCH_photos_REQUEST } from "./photostypes";
import { FETCH_photos_SUCCESS } from "./photostypes";


const INITIAL_STATE =  {
    loading: false,
    photos: [],
    error: '',
    searchField: ''
}

const photosReducer = (state = INITIAL_STATE,action) => {
   switch(action.type) {

       case FETCH_photos_REQUEST:
           return {
               ...state,
               loading: true
           }
       case FETCH_photos_SUCCESS:
           return {
               loading: false,
               photos: action.payload,
               error: ''
           }
       case FETCH_photos_FAILURE:
           return {
               loading: false,
               photos: [],
               error: action.payload
           }
       case ON_SEARCH_CHANGE:
           return {
               ...state,
               searchField: action.payload
           }
       default: return state    

   }
}
export default photosReducer;