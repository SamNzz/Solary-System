// import { LayerMaterial, Depth } from 'lamina'
import { Billboard, Center, Cloud, OrbitControls, PerspectiveCamera, Ring, Shadow, Sparkles, Stars, Text3D, Torus } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import './App.css';
import Planet from './components/Planet';
import Test from './components/test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Canvas>
          <hemisphereLight intensity={0.5} color="white" groundColor="black" />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Planet name="Sun" size={2} amount={100} color="yellow" emissive="orange" glow="lightyellow" />
          <Planet name="Mercury" position={[5.5, 0, 0]} size={.7} color="gray" />
          <Planet name="Venus" position={[8, 0, 0]} size={1.1} color="brown" />
          <Planet name="Earth" position={[12, 0, 0]} size={1.4} color="blue" cloud={true} />
          <Planet name="Mars" position={[15.5, 0, 0]} size={.9} color="brown" />
          <Planet name="Jupiter" position={[19, 0, 0]} size={2} color="orange" />
          <Planet name="Saturn" position={[24, 0, 0]} size={1.7} color="gray" />
          <Planet name="Uranus" position={[28, 0, 0]} size={1.4} color="bluegray" />
          <Planet name="Neptune" position={[32, 0, 0]} size={1.1} color="blue" />
          <Planet name="Pluto" position={[35.5, 0, 0]} size={.5} color="" />
          <Test />
          <OrbitControls position={[0, 0, 10]} />
        </Canvas>
      </header>
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
