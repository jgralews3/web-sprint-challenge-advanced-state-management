import React from 'react'
import {connect} from 'react-redux';
import {newSmurf, getSmurfs} from "../actions/index"


const Form = (props) => {

    const [smurf, setSmurf] = React.useState({name: "", age: "", height: ""})

    const changeHandler = e => {
        setSmurf({...smurf, [e.target.name]: e.target.value})
        console.log("change", smurf)
    }

    return (
        <div>
            <button onClick={() => {props.getSmurfs()}}>Initiate Smurf Array</button>
            <div></div>
            <input placeholder="Smurf Name" type="text" name="name" onChange={changeHandler}></input>
            <input placeholder="Smurf Age" type="text" name="age" onChange={changeHandler}></input>
            <input placeholder="Smurf Height" type="text" name="height" onChange={changeHandler}></input>
            <button onClick={() => {props.newSmurf(smurf)}}>Submit New Smurf</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {name: state.name, age: state.age, height: state.height}
}

const mapDispatchToProps = {newSmurf, getSmurfs}

export default connect(mapStateToProps, mapDispatchToProps)(Form)

