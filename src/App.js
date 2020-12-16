import React, { useEffect, useState } from 'react';
import './App.css';
import Chuck from './img/chuckpic.jpg';
import axios from 'axios';

function App() {

  const [state, setState] =useState({
    joke: ''
  })


useEffect( ()=>{
    fetchData();
    
}, [])

const fetchData = async ()=>{
  const results= await axios.get('https://api.chucknorris.io/jokes/random');
  console.log(results.data.value);
setState({
      ...state,
      joke: results.data.value
    });}



  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1 className="title">Chuck Norris API</h1>
          <img src ={Chuck} alt="Chuck Norris"/>
        </div>


        <div className="col-6 searchJokeCol">
          <div className="card">
            <div className="card-header">
                   <span></span>
            </div>

            <div className="card-body">
              <h5>API</h5>
            </div>

            

          </div>
<div> 
              <button onClick className="btn btn-warning btn-lg">Reload the Page from the Browser for the Joke to be Generated</button>
            </div>
        </div>

      </div>
      <div className="subtitle">
        <h1>Here is the Joke</h1>
        <h5>{state.joke}</h5>
      </div>
    </div>
  );
}



export default App;
