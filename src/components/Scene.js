import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Model from './Model'
import { OrbitControls } from '@react-three/drei'

import React from 'react'

const Scene = () => {
    return (
        <Canvas
            camera={{ fov: 40, near: 0.1, far: 1000, position: [0, 0, -100] }}
        >
            <ambientLight intensity={0.7} />
            <pointLight position={[-30, 10, 0]} intensity={1} />
            <pointLight position={[30, 0, -10]} intensity={0.2} />

            {/* <OrbitControls /> */}
            <Suspense fallback={null}>{/* <Model /> */}</Suspense>
        </Canvas>
    )
}

export default Scene
