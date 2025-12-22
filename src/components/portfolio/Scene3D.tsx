import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  Environment, 
  Float, 
  Text3D, 
  Center, 
  MeshTransmissionMaterial,
  useTexture,
  Stars,
  Sparkles,
  Html,
  PerspectiveCamera,
  OrbitControls
} from '@react-three/drei';
import * as THREE from 'three';

type SectionType = 'home' | 'about' | 'skills' | 'experience' | 'projects' | 'contact';

interface SceneProps {
  onSectionSelect: (section: SectionType) => void;
  activeSection: SectionType | null;
}

// Floating orb component for each section
const SectionOrb = ({ 
  position, 
  color, 
  label, 
  section, 
  onSelect, 
  isActive,
  icon 
}: { 
  position: [number, number, number]; 
  color: string; 
  label: string; 
  section: SectionType;
  onSelect: (section: SectionType) => void;
  isActive: boolean;
  icon: string;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      if (hovered || isActive) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1.5 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        {/* Glow effect */}
        <mesh ref={glowRef}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshBasicMaterial 
            color={color} 
            transparent 
            opacity={hovered || isActive ? 0.3 : 0.1} 
          />
        </mesh>
        
        {/* Main orb */}
        <mesh 
          ref={meshRef}
          onPointerEnter={() => { setHovered(true); document.body.style.cursor = 'pointer'; }}
          onPointerLeave={() => { setHovered(false); document.body.style.cursor = 'auto'; }}
          onClick={() => onSelect(section)}
        >
          <icosahedronGeometry args={[0.4, 1]} />
          <meshStandardMaterial 
            color={color} 
            emissive={color} 
            emissiveIntensity={hovered || isActive ? 1 : 0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Ring around orb */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.6, 0.02, 16, 100]} />
          <meshStandardMaterial 
            color={color} 
            emissive={color} 
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Label */}
        <Html
          position={[0, -1, 0]}
          center
          distanceFactor={10}
          style={{
            transition: 'all 0.3s',
            opacity: hovered || isActive ? 1 : 0.7,
            transform: `scale(${hovered || isActive ? 1.1 : 1})`,
          }}
        >
          <div className="text-center pointer-events-none select-none">
            <div className="text-2xl mb-1">{icon}</div>
            <div 
              className="font-orbitron text-xs tracking-widest uppercase px-3 py-1 rounded-full backdrop-blur-sm"
              style={{ 
                color: color,
                background: 'rgba(0,0,0,0.6)',
                border: `1px solid ${color}`,
                textShadow: `0 0 10px ${color}`,
              }}
            >
              {label}
            </div>
          </div>
        </Html>
      </group>
    </Float>
  );
};

// Central holographic display
const CentralDisplay = ({ name }: { name: string }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Holographic platform */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <ringGeometry args={[2, 4, 64]} />
        <meshStandardMaterial 
          color="#ff0033" 
          emissive="#ff0033" 
          emissiveIntensity={0.3}
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Vertical beams */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <mesh 
          key={i} 
          position={[
            Math.cos((i / 6) * Math.PI * 2) * 3,
            0,
            Math.sin((i / 6) * Math.PI * 2) * 3
          ]}
        >
          <cylinderGeometry args={[0.02, 0.02, 6, 8]} />
          <meshStandardMaterial 
            color="#ff0033" 
            emissive="#ff0033" 
            emissiveIntensity={0.5}
            transparent
            opacity={0.5}
          />
        </mesh>
      ))}

      {/* Name display */}
      <Html position={[0, 2, 0]} center distanceFactor={8}>
        <div className="text-center pointer-events-none select-none">
          <h1 
            className="font-orbitron text-4xl md:text-6xl font-black tracking-wider"
            style={{
              color: '#fff',
              textShadow: '0 0 20px #ff0033, 0 0 40px #ff0033, 0 0 60px #ff0033',
            }}
          >
            ABBAS
          </h1>
          <h1 
            className="font-orbitron text-4xl md:text-6xl font-black tracking-wider"
            style={{
              color: '#ff0033',
              textShadow: '0 0 20px #ff0033, 0 0 40px #ff0033',
            }}
          >
            HUSSEIN
          </h1>
          <p className="font-mono text-sm mt-4 text-white/80 tracking-widest">
            SOFTWARE ENGINEER • AI ENTHUSIAST
          </p>
        </div>
      </Html>
    </group>
  );
};

// Animated grid floor
const GridFloor = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeGeometry args={[100, 100, 100, 100]} />
      <shaderMaterial
        ref={meshRef as any}
        transparent
        uniforms={{
          uTime: { value: 0 },
          uColor: { value: new THREE.Color('#ff0033') },
        }}
        vertexShader={`
          varying vec2 vUv;
          varying float vElevation;
          uniform float uTime;
          
          void main() {
            vUv = uv;
            vec3 pos = position;
            float dist = length(pos.xy);
            pos.z = sin(dist * 0.5 - uTime) * 0.3 * (1.0 - smoothstep(0.0, 20.0, dist));
            vElevation = pos.z;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          varying float vElevation;
          uniform vec3 uColor;
          
          void main() {
            float grid = 0.0;
            float lineWidth = 0.02;
            
            vec2 gridUv = fract(vUv * 50.0);
            if (gridUv.x < lineWidth || gridUv.y < lineWidth) {
              grid = 1.0;
            }
            
            float dist = length(vUv - 0.5) * 2.0;
            float alpha = (1.0 - dist) * 0.5 * grid;
            alpha += vElevation * 0.5;
            
            gl_FragColor = vec4(uColor, alpha * 0.3);
          }
        `}
      />
    </mesh>
  );
};

// Camera controller
const CameraController = () => {
  const { camera } = useThree();
  
  useFrame((state) => {
    camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.5;
    camera.position.y = 2 + Math.sin(state.clock.elapsedTime * 0.15) * 0.3;
    camera.lookAt(0, 0, 0);
  });
  
  return null;
};

const Scene3D = ({ onSectionSelect, activeSection }: SceneProps) => {
  const sections: { section: SectionType; label: string; color: string; position: [number, number, number]; icon: string }[] = [
    { section: 'about', label: 'About', color: '#ff6b6b', position: [-4, 1, -2], icon: '👤' },
    { section: 'skills', label: 'Skills', color: '#4ecdc4', position: [-2.5, 0.5, -4], icon: '⚡' },
    { section: 'experience', label: 'Experience', color: '#ffe66d', position: [2.5, 0.5, -4], icon: '💼' },
    { section: 'projects', label: 'Projects', color: '#95e1d3', position: [4, 1, -2], icon: '🚀' },
    { section: 'contact', label: 'Contact', color: '#f38181', position: [0, 0.5, -5], icon: '✉️' },
  ];

  return (
    <div className="w-full h-screen bg-black">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 2, 10]} fov={60} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
        
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 10, 50]} />
        
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 5, 0]} intensity={1} color="#ff0033" />
        <pointLight position={[-5, 2, -5]} intensity={0.5} color="#4ecdc4" />
        <pointLight position={[5, 2, -5]} intensity={0.5} color="#ffe66d" />
        
        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Sparkles count={100} scale={20} size={2} speed={0.3} color="#ff0033" />
          
          <CentralDisplay name="Abbas Hussein" />
          <GridFloor />
          
          {sections.map((s) => (
            <SectionOrb
              key={s.section}
              position={s.position}
              color={s.color}
              label={s.label}
              section={s.section}
              onSelect={onSectionSelect}
              isActive={activeSection === s.section}
              icon={s.icon}
            />
          ))}
        </Suspense>
        
        <CameraController />
      </Canvas>

      {/* Instructions */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <p className="font-mono text-sm text-white/50 tracking-wider">
          Click on an orb to explore • Drag to look around
        </p>
      </div>
    </div>
  );
};

export default Scene3D;
