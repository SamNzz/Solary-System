import * as THREE from 'three'
import { Center, CurveModifier, Sparkles, Text3D, Torus } from '@react-three/drei';
import React, { useRef } from 'react';

export const Planet = ({ name, size = 1, amount = 0, color = 'white', emissive, glow, ...props }) => {
    // const curveRef = useRef()
    // const handlePos = [5, 0, 0]

    // const curve = React.useMemo(() => new THREE.CatmullRomCurve3([...handlePos], true, 'centripetal'), [handlePos])
    return (
        <mesh {...props}>
            <sphereGeometry args={[size, 64, 64]} />
            <meshPhysicalMaterial roughness={0} color={color} emissive={emissive || color} envMapIntensity={0.2} />
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
            {name === "Jupiter" && <Torus radialSegments={12} />}
            {name === "Earth" && <Planet name="Moon" position={[1.5, 1.5, 0]} size={.4} color="gray" />}
            {amount > 0 && <Sparkles count={amount} scale={size * 3} size={10} speed={3} />}
        </mesh>
    )
}

export default Planet
