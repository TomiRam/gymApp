import React from 'react';
import './App.css';

class OneRepMaximum extends React.Component {
  render() {
    return (
      <div className="OneRepMaximum">
        <h1> 1RM: 200Kg Deadlift</h1>
        <ul>
          <li>95% 1RM: 190Kg</li>
          <li>90% 1RM: 180Kg</li>
          <li>85% 1RM: 170Kg</li>
          <li>80% 1RM: 160Kg</li>
          <li>75% 1RM: 150Kg</li>
          <li>70% 1RM: 140Kg</li>
          <li>65% 1RM: 130Kg</li>
          <li>60% 1RM: 120Kg</li>
          <li>55% 1RM: 110Kg</li>
          <li>50% 1RM: 100Kg</li>
          
        </ul>

        <h1> 1RM: 160kg Squat</h1>
        <ul>
          <li>95% 1RM: 152Kg</li>
          <li>90% 1RM: 144Kg</li>
          <li>85% 1RM: 136Kg</li>
          <li>80% 1RM: 128Kg</li>
          <li>75% 1RM: 120Kg</li>
          <li>70% 1RM: 112Kg</li>
          <li>65% 1RM: 104Kg</li>
          <li>60% 1RM: 96Kg</li>
          <li>55% 1RM: 88Kg</li>
          <li>50% 1RM: 80Kg</li>
          
        </ul>
        <h1> 1RM: 120Kg Bench</h1>
        <ul>
          <li>95% 1RM: 114Kg</li>
          <li>90% 1RM: 108Kg</li>
          <li>85% 1RM: 102Kg</li>
          <li>80% 1RM: 96Kg</li>
          <li>75% 1RM: 90Kg</li>
          <li>70% 1RM: 84Kg</li>
          <li>65% 1RM: 78Kg</li>
          <li>60% 1RM: 72Kg</li>
          <li>55% 1RM: 66Kg</li>
          <li>50% 1RM: 60Kg</li>
          
        </ul>

        <h1> 1RM: 100Kg OverheadPress and Barbell Curl</h1>
        <ul>
          <li>95% 1RM: 95Kg</li>
          <li>90% 1RM: 90Kg</li>
          <li>85% 1RM: 85Kg</li>
          <li>80% 1RM: 80Kg</li>
          <li>75% 1RM: 75Kg</li>
          <li>70% 1RM: 70Kg</li>
          <li>65% 1RM: 65Kg</li>
          <li>60% 1RM: 60Kg</li>
          <li>55% 1RM: 55Kg</li>
          <li>50% 1RM: 50Kg</li>
          
        </ul>
      
      </div>
    );
  }
};

function App() {
  
  return (
    <div className="App">
      <h1>One Rep Maximum Method</h1>
      <OneRepMaximum/>
   
      <table style={{fontSize:25}}>
      <thead>
    <tr>
      <th># Of Sets</th>
      <th># Of Reps</th>
      <th>% Of 1RM </th>
      <th>Goal</th>  
      <th>Speed</th>
      <th>Rest</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3-4</td>
      <td>13-20</td>
      <td>60-70%</td>
      <td>Endurance</td>
      <td>Moderate</td> 
      <td>No Rest</td>    
    </tr>
    <tr>
      <td>3</td>
      <td>7-12</td>
      <td>70-85%</td>
      <td>Strength</td>
      <td>Moderate</td> 
      <td>30-60s</td>    
    </tr>
    <tr>
      <td>3-4</td>
      <td>1-6</td>
      <td>85-100%</td>
      <td>Power</td>
      <td>Fast</td> 
      <td>2-3min</td>    
    </tr>
  </tbody>
      </table>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>

    <input type='text'>

      </input>
      <input type='date'>

      </input>
      <input type= 'time'>
        
      </input>
      </>
  );
}

export default App;
