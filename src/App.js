// import { LayerMaterial, Depth } from 'lamina'
import { Billboard, Box, Center, Cloud, OrbitControls, PerspectiveCamera, Plane, Ring, Shadow, Sparkles, Stars, Text3D, Torus, useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import './App.css';
import Planet from './components/Planet';

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
          {/* <img src='/Ground054_1K_Color.jpg' /> */}
    </div>
  );
}

// const Glow = ({ color, scale = 0.5, near = -2, far = 1.4 }) => (
//   <Billboard>
//     <mesh>
//       <circleGeometry args={[2 * scale, 16]} />
//       <LayerMaterial
//         transparent
//         depthWrite={false}
//         blending={THREE.CustomBlending}
//         blendEquation={THREE.AddEquation}
//         blendSrc={THREE.SrcAlphaFactor}
//         blendDst={THREE.DstAlphaFactor}>
//         <Depth colorA={color} colorB="black" alpha={1} mode="normal" near={near * scale} far={far * scale} origin={[0, 0, 0]} />
//         <Depth colorA={color} colorB="black" alpha={0.5} mode="add" near={-40 * scale} far={far * 1.2 * scale} origin={[0, 0, 0]} />
//         <Depth colorA={color} colorB="black" alpha={1} mode="add" near={-15 * scale} far={far * 0.7 * scale} origin={[0, 0, 0]} />
//         <Depth colorA={color} colorB="black" alpha={1} mode="add" near={-10 * scale} far={far * 0.68 * scale} origin={[0, 0, 0]} />
//       </LayerMaterial>
//     </mesh>
//   </Billboard>
// )

export default App;
