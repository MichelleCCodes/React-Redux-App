import axios from 'axios'
// action types
export const FETCH_STATIONS_START = "FETCH_STATIONS_START"
export const FETCH_STATIONS_SUCCESS = "FETCH_STATIONS_SUCCESS"
// export const FETCH_STATIONS_FAIL = "FETCH_STATIONS_FAIL"


// action creators (async)
export const fetchStations = () => {
    return (dispatch) => {
        //do async actions here 
        dispatch({ type: FETCH_STATIONS_START });
    
        axios
        .get('https://api.openchargemap.io/v3/poi/?output=json&countrycode=US&maxresults=10&compact=true&verbose=false')
        .then(res => {
            dispatch({type: FETCH_STATIONS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log('An error from actions')
        })
    }
}