// src/components/Scene/Scene.js
import React, { Suspense, useLayoutEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

const Model = () => {
  // useGLTF now also returns animations
  const { scene, animations } = useGLTF('/space-travel.glb');
  const modelRef = useRef();

  // useAnimations takes the animations and a ref to the model
  const { actions } = useAnimations(animations, modelRef);

  useEffect(() => {
    // Play the first animation in the array
    if (actions && animations.length > 0) {
      const animationName = animations[0].name;
      actions[animationName].play();
    }
  }, [actions, animations]);

  // We now need to use a ref on the primitive
  return <primitive ref={modelRef} object={scene} scale={0.5} />;
};


// This component will handle the camera animations
const CameraController = () => {
  const { camera } = useFrame((state) => {
    // This function runs on every frame
  });

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".content-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // "scrub: true" or a number makes the animation smooth
      },
    });

    // --- YOUR STORYTELLING ANIMATIONS GO HERE ---

    // Start with the camera zoomed out
    camera.position.set(0, 2, 10);
    
    // Chapter 1: As you scroll down, move the camera closer
    tl.to(camera.position, {
      x: 0,
      y: 1,
      z: 5,
      ease: "power1.inOut",
    }, 0); // The "0" means this animation starts at the beginning of the timeline

    // Chapter 2: Rotate around the model
     tl.to(camera.rotation, {
      y: Math.PI / 2, // Rotate 90 degrees
      ease: "power1.inOut",
    }, 1); // Starts at second 1 of the timeline

    // Chapter 3: Move to a different position
    tl.to(camera.position, {
      x: -5,
      y: 0,
      z: 0,
      ease: "power1.inOut",
    }, 2); // Starts at second 2 of the timeline

    // Make the camera always look at the center of the scene
    tl.to(camera.rotation, {
      x: 0,
      y: Math.PI, // Look from the back
      z: 0,
      onUpdate: () => camera.lookAt(0, 0, 0)
    }, 2);


  }, [camera]);

  return null;
};


const CanvasWrapper = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Model />
        <OrbitControls enableZoom={false} enablePan={false} />
        <CameraController />
      </Suspense>
    </Canvas>
  );
};

export default CanvasWrapper;