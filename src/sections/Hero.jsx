import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Line } from '@react-three/drei'
import { motion } from 'framer-motion'

function MovingStars() {
    const starsRef = useRef()

    const positions = useMemo(() => {
        const count = 900
        const data = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
            const i3 = i * 3

            data[i3] = (Math.random() - 0.5) * 50
            data[i3 + 1] = (Math.random() - 0.5) * 30
            data[i3 + 2] = (Math.random() - 0.5) * 30
        }

        return data
    }, [])

    useFrame((state, delta) => {
        if (!starsRef.current) return

        starsRef.current.rotation.y += delta * 0.075
        starsRef.current.rotation.x += delta * 0.015
    })

    return (
        <points ref={starsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>

            <pointsMaterial
                size={0.045}
                color="#ffffff"
                transparent
                opacity={1}
                sizeAttenuation
            />
        </points>
    )
}

function DevOpsCore() {
    const groupRef = useRef()
    const nodes = [
        [2.4, 0.8, 0],
        [1.8, -1.4, 0.5],
        [-2.2, -0.8, 0],
        [-2, 1.3, 0.4],
        [0.2, 2.2, -0.5],
        [0.3, -2.1, 0.5],
    ]

    const connections = [
        [[0, 0, 0], nodes[0]],
        [[0, 0, 0], nodes[1]],
        [[0, 0, 0], nodes[2]],
        [[0, 0, 0], nodes[3]],
        [[0, 0, 0], nodes[4]],
        [[0, 0, 0], nodes[5]],
        [nodes[0], nodes[4]],
        [nodes[2], nodes[5]],
        [nodes[3], nodes[4]],
    ]

    useFrame((state, delta) => {
        if (!groupRef.current) return

        const mouseX = state.pointer.x
        const mouseY = state.pointer.y

        const targetX = mouseY * 0.15
        const targetY = mouseX * 0.25

        // Continuous rotation
        groupRef.current.rotation.z += delta * 0.35

        // Smooth mouse tilt
        groupRef.current.rotation.x +=
            (targetX - groupRef.current.rotation.x) * 0.03

        groupRef.current.rotation.y +=
            (targetY - groupRef.current.rotation.y) * 0.03
    })

    return (
        <Float
            speed={1.5}
            rotationIntensity={0.4}
            floatIntensity={1}
        >
            <group ref={groupRef}>

                {/* Central Infrastructure Core */}
                <mesh>
                    <icosahedronGeometry args={[1.35, 1]} />

                    <meshStandardMaterial
                        color="#00d4ff"
                        wireframe
                        emissive="#00aaff"
                        emissiveIntensity={3}
                    />
                </mesh>

                {/* Inner Core */}
                <mesh>
                    <sphereGeometry args={[0.65, 32, 32]} />

                    <meshStandardMaterial
                        color="#061826"
                        emissive="#00d4ff"
                        emissiveIntensity={2.5}
                        transparent
                        opacity={0.85}
                    />
                </mesh>

                {/* Infrastructure Nodes */}
                {nodes.map((position, index) => (
                    <mesh key={index} position={position}>
                        <sphereGeometry args={[0.13, 16, 16]} />

                        <meshStandardMaterial
                            color="#7c3aed"
                            emissive="#7c3aed"
                            emissiveIntensity={3}
                            toneMapped={false}
                        />
                    </mesh>
                ))}

                {/* Network Connections */}
                {connections.map((points, index) => (
                    <Line
                        key={index}
                        points={points}
                        color="#38bdf8"
                        lineWidth={1}
                        transparent
                        opacity={0.5}
                    />
                ))}
            </group>
        </Float>
    )
}

function HeroScene() {
    return (
        <>
            <ambientLight intensity={0.5} />

            <pointLight
                position={[5, 5, 5]}
                intensity={120}
                distance={12}
                color="#00d4ff"
            />

            <pointLight
                position={[-5, -3, 2]}
                intensity={100}
                distance={10}
                color="#7c3aed"
            />

            <DevOpsCore />

            <pointLight
                position={[0, 0, 0]}
                intensity={35}
                distance={6}
                color="#00d4ff"
            />

            <MovingStars />

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}

            />
        </>
    )
}

function Hero() {
    return (
        <section className="hero">
            <div className="hero-canvas">
                <Canvas
                    camera={{
                        position: [0, 0, 7],
                        fov: 45,
                    }}
                    dpr={[1, 1.5]}
                    gl={{ antialias: true }}
                >
                    <HeroScene />
                </Canvas>
            </div>

            <div className="hero-content">
                <motion.p
                    className="hero-greeting"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Hello, I'm Sachin Pandey
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    DevOps Engineer
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    BCA Passed • DevOps Specialized
                </motion.h2>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Building automated, scalable and reliable cloud infrastructure
                    with modern DevOps technologies.
                </motion.p>

                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <a href="#projects" className="btn btn-primary">
                        View Projects
                    </a>

                    <a href="#contact" className="btn btn-secondary">
                        Contact Me
                    </a>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span>Scroll</span>

                <motion.div
                    className="scroll-arrow"
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    ↓
                </motion.div>
            </motion.div>

        </section>
    )
}

export default Hero