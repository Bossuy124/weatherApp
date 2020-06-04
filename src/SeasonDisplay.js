import React from 'react';
import ReactDOM from 'react-dom';
import './SeasonDisplay.css';
// NOTE: object for each season gives you data for either summer or winter
const seasonConfig = {
  Summer: {
    text: "Time to go to the beach! (summer)",
    iconName: 'sun'
  },
  Winter: {
    text: 'Time to play in the snow! (winter)',
    iconName: 'snowflake'
  }
};
const calSeason = (lat, month) => {
   var North = false;
   if(lat < 0){
     North = false;
   }else{
     North = true;
   }
   //Return TRUE if the season is winter else then it is summer
   if(North === false){if(month <= 3 ){return 'Winter';}else if(month >= 10){ return 'Winter'; }else{return 'Summer'; }}
   if(North === true){if(month <= 3){return 'Summer'}else if(month>=10){return 'Summer'}else{return 'Winter';}}

}
const SeasonDisplay = props => {
// Getting the month needed
const season = calSeason(props.lat, new Date().getMonth() + 1);
const {text, iconName} = seasonConfig[season];  // Calling the objetc with the season
console.log(" Approx Season is: " + season);
//Getting the icone name from if statement abd passing to Semantic UI
// the dollar sign and other symbols is to reference the className variable in the tags

return(
    <div className={`season-display ${season}`}>
    <i className={`icon-left massive ${iconName} icon`} />
       <h1> {text} </h1>
      <i className={`icon-right massive ${iconName} icon`} />
   </div>

);

};
export default SeasonDisplay;
