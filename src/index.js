import React from 'react';
import ReactDOM from 'react-dom';
// Replaced the af with  a class component
class App extends React.Component{
  constructor(props) {         // Need a cosntructor
    super(props);
    // ONLY PUT EQUAL WHEN DECLARING STATE
    this.state = { lat: null}; //Setting a object name LAT = ???


    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //Called setState to update the state of the latitude
        // this is a CallBack function where we return the result of the state
        this.setState({lat: position.coords.latitude});
      },
      (err) => {
        this.setState({lat: err.message});
      }
    );

  }
  render(){

    return <div>Lat: {this.state.lat} </div>; //How to reference a var inside the state
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
