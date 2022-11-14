import * as THREE from 'three'
import { CurveModifier } from "@react-three/drei"
import React, { useRef } from "react"
import Planet from './Planet'

export const Test = () => {
     const curveRef = useRef()
    const handlePos = [[5, 0, 0], [-5, 0, 5], [-10, 0, 0], [5, 0, -5]]

    const curve = React.useMemo(() => new THREE.CatmullRomCurve3([...handlePos], true, 'centripetal'), handlePos)
    return (
        <CurveModifier>
            <Planet name="Mercury" position={[0, 5, 0]} size={.7} color="gray" />
        </CurveModifier>
    )
}

export default Test