"use client";

import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, OrbitControls } from "@react-three/drei";
import { Mesh } from "three";

// Компонент для фонового шару з текстурою
const BackgroundSphere = ({ texture }: { texture: any }) => {
  const sphereRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      // Обертання сфери навколо осі Y
      const elapsedTime = clock.getElapsedTime();
      sphereRef.current.rotation.y = elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[5, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

// Компонент для інтерактивних зон
const InteractiveZone = ({
  position,
  color,
  name,
}: {
  position: [number, number, number];
  color: string;
  name: string;
}) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      // Обертання зони навколо осі Y при наведенні
      meshRef.current.rotation.y += hovered ? 0.02 : 0;
    }
  });

  return (
    <mesh
      position={position}
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => console.log(`Clicked on ${name}`)}
    >
      <boxGeometry args={[1, 1, 0.1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

// Компонент для рендерингу Canvas та обробки зміни зображення
const ImageViewer3D = ({ images }: { images: string[] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Функція для завантаження текстур
  const TexturedCanvas = () => {
    const textures = useTexture(images); // Використовуйте хук всередині Canvas компонента

    return (
      <>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <OrbitControls enableZoom={false} />
        <BackgroundSphere texture={textures[currentImageIndex]} />
        {/* 3D інтерактивні зони */}
        <InteractiveZone position={[2, 2, 0]} color="red" name="Zone 1" />
        <InteractiveZone position={[-2, -2, 0]} color="blue" name="Zone 2" />
      </>
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <button
        onClick={handlePrevious}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          zIndex: 100,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        &#9664;
      </button>

      <Canvas camera={{ position: [0, 0, 5] }}>
        <TexturedCanvas />
      </Canvas>

      <button
        onClick={handleNext}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          zIndex: 100,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        &#9654;
      </button>
    </div>
  );
};

const Page = () => {
  const images = [
    "/images/model/2024-08-24_17-01-16.png",
    "/images/model/2024-08-24_17-04-33.png",
    "/images/model/2024-08-24_17-05-59.png",
    "/images/model/2024-08-24_17-07-59.png",
    "/images/model/2024-08-24_17-09-12.png",
    "/images/model/2024-08-24_17-10-09.png",
    "/images/model/2024-08-24_17-11-01.png",
    "/images/model/2024-08-24_17-11-55.png",
    "/images/model/2024-08-24_17-12-43.png",
    "/images/model/2024-08-24_17-14-25.png",
    "/images/model/2024-08-24_17-15-44.png",
    "/images/model/2024-08-24_17-16-55.png",
    "/images/model/2024-08-24_17-17-52.png",
    "/images/model/2024-08-24_17-18-56.png",
    "/images/model/2024-08-24_17-23-50.png",
    "/images/model/2024-08-24_17-25-29.png",
    "/images/model/2024-08-24_17-24-35.png",
    "/images/model/2024-08-24_17-26-39.png",
  ];

  return (
    <div>
      <ImageViewer3D images={images} />
    </div>
  );
};

export default Page;
