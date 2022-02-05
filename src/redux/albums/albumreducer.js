import { FETCH_albums_FAILURE } from "./albumstypes";
import { FETCH_albums_REQUEST } from "./albumstypes";
import { FETCH_albums_SUCCESS } from "./albumstypes";
const INITIAL_STATE =  {
     loading: false,
     albums: [],
     error: ''
}

const albumsReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {

        case FETCH_albums_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_albums_SUCCESS:
            return {
                loading: false,
                albums: action.payload,
                error: ''
            }
        case FETCH_albums_FAILURE:
            return {
                loading: false,
                albums: [],
                error: action.payload
            }
        default: return state    

    }
}
export default albumsReducer;