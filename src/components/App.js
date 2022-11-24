// import { LayerMaterial, Depth } from 'lamina'
import React from 'react'
import { OrbitControls, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import '../styles/App.css';
import Planet from './Planet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Canvas>
          <pointLight position={[5, 3, 5]} intensity={1.5} />
          {/* <hemisphereLight intensity={0.5} color="white" groundColor="black" /> */}
          {/* <hemisphereLight intensity={1} color="white" /> */}
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Planet name="earth" position={[0, 0, 0]} size={.6} atm={true} rSpeed={0.0007} />
          <Planet name="mercury" position={[5.5, 0, 0]} size={.7} />
          <Planet name="mars" position={[15.5, 0, 0]} size={.9} />
          <Planet name="venus" position={[8, 0, 0]} size={1.1} />
          {/* <Planet name="sun" size={2} />
          <Planet name="jupiter" position={[19, 0, 0]} size={2} />
          <Planet name="saturn" position={[24, 0, 0]} size={1.7} />
          <Planet name="uranus" position={[28, 0, 0]} size={1.4} />
          <Planet name="neptune" position={[32, 0, 0]} size={1.1} /> */}
          {/* <Planet name="pluto" position={[35.5, 0, 0]} size={.5} /> */}
          <OrbitControls position={[0, 0, 10]} />
        </Canvas>
      </header>
    </div>
  );
}

export default App;
