import React from 'react';
import ReactDOM from 'react-dom';
// Replaced the af with  a class component

class App extends React.Component{
  render(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position), // Success CallBack if the function works and gets position
      (err) => console.log(err)
    );
    return <div>Lat: </div>;
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
