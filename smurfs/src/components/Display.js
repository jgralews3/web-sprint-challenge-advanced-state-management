import React from 'react'
import {connect} from 'react-redux'
import {getSmurfs} from '../actions/index'

const Display = (props) => {
    
    React.useEffect(() => {
        getSmurfs();
      }, [getSmurfs]);

      console.log("Props", props.smurf)

    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log("Display State:", state);
    return state
}


export default connect(mapStateToProps, {})(Display)