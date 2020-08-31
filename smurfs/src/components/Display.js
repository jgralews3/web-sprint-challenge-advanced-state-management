import React from 'react'
import {connect} from 'react-redux'
import {getSmurfs} from '../actions/index'

const Display = (props) => {
    
    // React.useEffect(() => {
    //     getSmurfs();
    //   }, []);

      console.log("Display Props", props[0])
      const array = {props}

    return (
        <div>
            {props[0].map((smurf)=>(
                smurf.map((smurf1) => (
                    <div>
                    <p>Name: {smurf1.name}</p>
                    <p>Age: {smurf1.age}</p>
                    <p>Height: {smurf1.height}</p>
                </div>
                ))
                
                ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return [state]
}


export default connect(mapStateToProps, {})(Display)