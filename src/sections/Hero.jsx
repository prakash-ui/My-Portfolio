import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import Typewriter from "../components/Typewriter";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center gap-10 p-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left z-10" // Added z-index
      >
        <h1 className="text-4xl md:text-6xl font-bold">Hey, I'm Prakash Timilsina</h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
        I create <Typewriter texts={["exceptional web solutions", "high-performance interfaces", "scalable digital products"]} />
        </p>
       
        <a
          href="#projects"
          className="mt-6 inline-block px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:scale-105 transition"
        >
          View My Work
        </a>
      </motion.div>
      
      <div className="w-full md:w-1/2 h-64 md:h-96 relative">
        <Canvas
          camera={{ position: [0, 0, 4], fov: 50 }}
          gl={{ antialias: true }}
        >
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[3, 2, 1]}
            intensity={1}
            castShadow
          />
          
          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={2}
            enablePan={false}
          />
          
          {/* 3D Sphere */}
          <Sphere args={[1, 32, 32]}>
            <meshStandardMaterial
              color="#6366f1"
              wireframe
              metalness={0.3}
              roughness={0.2}
              emissive="#6366f1"
              emissiveIntensity={0.2}
            />
          </Sphere>
          
          {/* Background Elements */}
          <Stars
            radius={100}
            depth={50}
            count={2000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
        </Canvas>
      </div>
    </section>
  );
}