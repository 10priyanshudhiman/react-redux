import { combineReducers } from "redux";
import albumsReducer from './albums/albumreducer';
import photosReducer from "./photos/photosreducers";


export default combineReducers({
    photo: photosReducer,
    album: albumsReducer

});