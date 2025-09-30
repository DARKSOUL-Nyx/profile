// src/components/Scene/Scene.js
import React, { Suspense, useLayoutEffect, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber'; // Import useThree
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

const Model = () => {
  const { scene, animations } = useGLTF('/space-travel.glb');
  const modelRef = useRef();
  const { actions } = useAnimations(animations, modelRef);

  useEffect(() => {
    if (actions && animations.length > 0) {
      const animationName = animations[0].name;
      actions[animationName].play();
    }
  }, [actions, animations]);

  return <primitive ref={modelRef} object={scene} scale={0.5} />;
};

const CameraController = () => {
  const { camera } = useThree(); // Use useThree to get the camera

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".content-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    camera.position.set(0, 2, 10);
    
    tl.to(camera.position, {
      x: 0,
      y: 1,
      z: 5,
      ease: "power1.inOut",
    }, 0);

     tl.to(camera.rotation, {
      y: Math.PI / 2,
      ease: "power1.inOut",
    }, 1);

    tl.to(camera.position, {
      x: -5,
      y: 0,
      z: 0,
      ease: "power1.inOut",
    }, 2);

    tl.to(camera.rotation, {
      x: 0,
      y: Math.PI,
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