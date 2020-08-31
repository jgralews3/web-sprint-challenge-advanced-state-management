import React from "react";
import "./App.css";
import Form from './Form';
import Display from './Display'
import {connect} from 'react-redux'

const App = (props) => {
    return (
      <div className="App">
        <Display />
        <Form />
      </div>
    );
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, {})(App);
