import * as THREE from 'three'
// import { LayerMaterial, Depth } from 'lamina'
import { Billboard, Center, Cloud, OrbitControls, Shadow, Sparkles, Stars, Text3D } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Canvas>
          <hemisphereLight intensity={0.5} color="white" groundColor="black" />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Sphere name="Sun" color="yellow" size={2} amount={100} emissive="orange" glow="lightyellow" />
          <Sphere name="Mercury" position={[5.5, 0, 0]} size={.7} color="gray" />
          <Sphere name="Venus" position={[8, 0, 0]} size={1.1} color="brown" />
          <Sphere name="Earth" position={[12, 0, 0]} size={1.4} color="blue" cloud={true} />
          <Sphere name="Mars" position={[15.5, 0, 0]} size={.9} color="brown" />
          <Sphere name="Jupiter" position={[19, 0, 0]} size={2} color="orange" />
          <Sphere name="Saturn" position={[24, 0, 0]} size={1.7} color="gray" />
          <Sphere name="Uranus" position={[28, 0, 0]} size={1.4} color="bluegray" />
          <Sphere name="Neptune" position={[32, 0, 0]} size={1.1} color="blue" />
          <Sphere name="Pluto" position={[35.5, 0, 0]} size={.5} color="" />
          <OrbitControls />
        </Canvas>
      </header>
    </div>
  );
}

const Sphere = ({ name, size = 1, amount = 0, color = 'white', emissive, glow, cloud = false, ...props }) => (
  <mesh {...props}>
    <sphereGeometry args={[size, 64, 64]} />
    <meshPhysicalMaterial roughness={0} color={color} emissive={emissive || color} envMapIntensity={0.2} />
    {cloud && <Cloud
      opacity={0.5}
      speed={1} // Rotation speed
      width={.001} // Width of the full cloud
      depth={.5} // Z-dir depth
      segments={2} // Number of particles
    />}
    <Center position={[0, size * 1.5, 0]}>
      <Text3D
        curveSegments={32}
        bevelEnabled
        bevelSize={0.04}
        bevelThickness={0.1}
        height={0.5}
        lineHeight={0.5}
        letterSpacing={-0.06}
        size={size/2}
        font="/Inter_Bold.json"
      >
        {name}
        <meshNormalMaterial />
      </Text3D>
    </Center>
    {/* <Glow scale={size * 1.2} near={-25} color={glow || emissive || color} /> */}
    {amount > 0 && <Sparkles count={amount} scale={size * 3} size={10} speed={3} />}
  </mesh>
)

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
