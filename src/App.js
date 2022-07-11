import React from "react";
import './App.css';
import Box from "./components/Box"
import './styles/global.css'

const tempMin = -20
const tempsMax = 40
const heartMin = 80
const heartMax = 180
const stepMin = 0
const stepMax = 50000

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Water */}
          <Box icon="local_drink" color="#3A85FF" value="1.5" unit="L"/>
          {/* Steps */}
          <Box icon="directions_walk" color="black" value="3000" unit="Steps"/>
          {/* Heart */}
          <Box icon="favorite" color="red" value="120" unit="bpm"/>
          {/* Temperature */}
          <Box icon="wb_sunny" color="yellow" value="-10" unit="°c"/>
        </div>
      </div>
    );
  }
}

export default App;