import React from 'react'
// import { Connector } from 'mqtt-react-hooks'

// const mqtt = require('mqtt')

// Called when trying to start the sensor
function handleStart() {
  // Calling the api to start the sensor
  fetch('http://localhost:4000/start', {
    method: 'POST',
  })
}

// Called when trying to stop the sensor
function handleStop() {
  // Calling the api to stop the sensor
  fetch('http://localhost:4000/stop', {
    method: 'POST',
  })
}

// Creating the landing page
export default function LandingPage() {
  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          color: 'goldenrod',
        }}
      >
        Temperature and Humidity Sensor
      </h1>

      <div>
        <button onClick={handleStart}>Start</button>
      </div>
      <div>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  )
}
