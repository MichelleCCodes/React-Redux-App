import React, {useEffect} from 'react'; 
import { connect } from 'react-redux'; 
// import { stationsReducer } from '../reducers';
import { fetchStations } from '../actions'; 

const StationsList = (props) => {
    useEffect(()=> {
    // props.fetchStations();
    })
    return (
        <div>
        <h2>Charging Stations:</h2>
        {props.isFetching ? <p>Plugging into your stations...</p> : null }
        {props.error ? <p>{props.error}</p> : null}
        {props.stations.map(station => (
            <div>
                <h4>{station.stationsData}</h4>
            </div>
        ))}
        </div>
        );
    };

    // here, we are mapping stationsData state, 
    //along with other states, to our prop of this component
const mapStateToProps = (state) => {
    return{
        isFetching: state.isFetching, 
        stations: state.stationsData, 
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchStations })(StationsList); 
// connect will call the function of whatever you put in 
//there and get the state from the redux store
