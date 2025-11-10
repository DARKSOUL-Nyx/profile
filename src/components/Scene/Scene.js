// src/components/Scene/Scene.js
import React, { useRef } from 'react';
import { useGLTF, useScroll, Text3D } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

// This component holds your 3D model
function Model(props) {
  // Load your .glb file
  const { nodes, materials } = useGLTF('/space-travel.glb'); // Path from /public
  const ref = useRef();
  
  // Get scroll data
  const scroll = useScroll();

  // useFrame runs 60 times a second
  useFrame(() => {
    // Animate model based on scroll
    // scroll.offset goes from 0 (top) to 1 (bottom)
    
    // Animate rotation
    ref.current.rotation.x = scroll.offset * Math.PI * 2; // Full 360 spin
    ref.current.rotation.y = scroll.offset * Math.PI * 1;
    
    // Animate position (move it "away" as you scroll)
    ref.current.position.z = scroll.offset * -10;
  });

  // This is a simplified scene structure. 
  // You may need to adjust based on your model's contents.
  return (
    <group ref={ref} {...props} dispose={null} scale={0.5} position={[0, -1, 0]}>
      {/* These names must match your .glb file's node names */}
      {nodes.Object_2 && (
        <mesh 
          geometry={nodes.Object_2.geometry} 
          material={materials.material} 
        />
      )}
      {nodes.Object_3 && (
        <mesh 
          geometry={nodes.Object_3.geometry} 
          material={materials.material} 
        />
      )}
      {/* Add more <mesh> components if your model has more parts */}
    </group>
  );
}

// This component holds your 3D text
function TitleText() {
  const ref = useRef();
  const scroll = useScroll();

  useFrame(() => {
    // Animate text based on scroll
    // 1. Move it down and forward
    ref.current.position.y = -scroll.offset * 10;
    ref.current.position.z = scroll.offset * 5;
    
    // 2. Fade it out after 50% scroll
    // This uses a helper function
    ref.current.material.opacity = 1 - scroll.range(0.5, 1);
  });

  return (
    <group position={[-15, 2.5, -10]}> {/* Initial position */}
      <Text3D
        ref={ref}
        font="/Inter_Bold.json" // Path from /public
        size={4}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        DARKSOUL
        <meshStandardMaterial color="#4DB6AC" /> {/* Teal color */}
      </Text3D>
    </group>
  );
}

// The main Scene component
export default function Scene() {
  return (
    <>
      {/* --- Lights --- */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      
      {/* --- 3D Objects --- */}
      <TitleText /> {/* Your 3D Title */}
      <Model /> {/* Your 3D Model */}
    </>
  );
}

// Preload the model for faster loading
useGLTF.preload('/space-travel.glb');