import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
// Replaced the af with  a class component
class App extends React.Component{
  constructor(props) {         // Need a cosntructor
    super(props);
    // ONLY PUT EQUAL WHEN DECLARING STATE
    this.state = {lat: null, err:''}; //Setting a object name LAT = ???

  }
  componentDidMount(){
    console.log('The component started right now');
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
      err => this.setState({err: err.message})
    );
  }
  componentDidUpdate(){
    console.log('The componentDidUpdate');
  }

  render(){

     if(this.state.err && !this.state.lat){
      return <div>Error: {this.state.err} </div>
    }
    if(!this.state.err && this.state.lat){
      return <SeasonDisplay lat={this.state.lat}/>
    }

    if(!this.state.lat && !this.state.err){
      return <div className="ui active dimmer">
      <div className ="ui massive text loader">Please Press Allow</div>
      </div>

    }
    //How to reference a var inside the state

  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
