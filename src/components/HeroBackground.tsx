import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

function AnimatedSphere() {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame(() => {
        if (!meshRef.current) return

        meshRef.current.rotation.y += 0.0003
        meshRef.current.rotation.x += 0.0001
    })

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[2.7, 200, 200]} />
            <meshStandardMaterial color="#6c5ce7" wireframe />
        </mesh>
    )
}

export function HeroBackground() {
    return (
        <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={1} />
            <directionalLight position={[2, 2, 2]} />
            <AnimatedSphere />
        </Canvas>
    )
}