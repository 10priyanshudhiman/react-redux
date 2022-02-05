import axios from 'axios';
import { FETCH_albums_FAILURE } from "./albumstypes";
import { FETCH_albums_REQUEST } from "./albumstypes";
import { FETCH_albums_SUCCESS } from "./albumstypes";

export const fetchalbumsRequest = () => {
    return {
        type:FETCH_albums_REQUEST
    }
}

export const fetchalbumsSuccess = (albums) => {
    return {
        type: FETCH_albums_SUCCESS,
        payload: albums
    }


}

export const fetchalbumsFailure = (error) => {
    return {
        type: FETCH_albums_FAILURE,
        payload: error
    }
}

export const fetchalbums = () => {
    return (dispatch) => {
        dispatch(fetchalbumsRequest)
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(response => {
            const albums = response.data
            dispatch(fetchalbumsSuccess(albums));
        })
        .catch(err => {
            const errmsg = err.message
            dispatch(fetchalbumsFailure(errmsg)); 
        })
    }
}

