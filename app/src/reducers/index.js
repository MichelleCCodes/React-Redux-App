import { FETCH_STATIONS_START, FETCH_STATIONS_SUCCESS } from '../actions';

const initialState = {
    isFetching: false, 
    stationsData: [], 
    error: ''
}; 

export const stationsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_STATIONS_START: 
            return{
                ...state, 
                isFetching: true, 
                error: ''
            }
        case FETCH_STATIONS_SUCCESS: 
        return{
            ...state, 
            isFetching: false, 
            stationsData: action.payload, 
        }
        default: 
        return state; 
    }
}