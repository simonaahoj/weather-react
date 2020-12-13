import React from 'react';
import axios from 'axios';
 import Loader from 'react-loader-spinner'

export default function Weather(props){

    function handleResponse(response){
alert (`The weather in ${response.data.name} is ${response.data.main.temp}℃`)
    }
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=114cd41965401542304c61b473a9b798&units=metric`
    
    axios.get(apiUrl).then(handleResponse);
    return (<div>
     <h2> Good Weather</h2>
        <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000}/>
         </div>)
}