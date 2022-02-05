import axios from 'axios'; 
import { FETCH_photos_FAILURE } from "./photostypes";
import { FETCH_photos_REQUEST } from "./photostypes";
import { FETCH_photos_SUCCESS } from "./photostypes";
import { ON_SEARCH_CHANGE } from './photostypes';

export const fetchphotosRequest = () => {
    return {
        type:FETCH_photos_REQUEST
    }
}

export const fetchphotosSuccess = (photos) => {
    return {
        type: FETCH_photos_SUCCESS,
        payload: photos
    }


}

export const fetchphotosFailure = (error) => {
    return {
        type: FETCH_photos_FAILURE,
        payload: error
    }
}

export const onSearchChange = (value) => {
    return {
        type: ON_SEARCH_CHANGE,
        payload: value
    }
}



export const fetchphotos = () => {
    return (dispatch) => {
        dispatch(fetchphotosRequest)
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            const photos = response.data;
            
            dispatch(fetchphotosSuccess(photos));
            dispatch(onSearchChange(" "));
        })
        .catch( err => {
            const errmsg = err.message;
            dispatch(FETCH_photos_FAILURE(errmsg));
        })

    }
}