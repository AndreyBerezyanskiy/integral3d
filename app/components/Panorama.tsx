"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three";

function Panorama({ images }) {
  // Завантаження текстури
  const texture = useLoader(TextureLoader, images[0]);

  // Налаштування текстури
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 1); // Повтор текстури по горизонталі
  texture.offset.set(0.5, 0); // Зсув для корекції розташування

  // Отримання співвідношення сторін текстури
  const aspectRatio = texture.image.width / texture.image.height;

  return (
    <mesh>
      {/* Використання масштабування сфери для корекції аспектного співвідношення */}
      <sphereGeometry args={[500, 60, 40]} scale={[aspectRatio, 1, 1]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

export default function PanoramaScene() {
  // Масив зображень (починаючи з 2.png, до 46.png)
  const images = [
    "/images/360/2.png",
    "/images/360/3.png",
    "/images/360/4.png",
    "/images/360/5.png",
    "/images/360/6.png",
    "/images/360/7.png",
    "/images/360/8.png",
    "/images/360/9.png",
    "/images/360/10.png",
    "/images/360/11.png",
    "/images/360/12.png",
    "/images/360/13.png",
    "/images/360/14.png",
    "/images/360/15.png",
    "/images/360/16.png",
    "/images/360/17.png",
    "/images/360/18.png",
    "/images/360/19.png",
    "/images/360/20.png",
    "/images/360/21.png",
    "/images/360/22.png",
    "/images/360/23.png",
    "/images/360/24.png",
    "/images/360/25.png",
    "/images/360/26.png",
    "/images/360/27.png",
    "/images/360/28.png",
    "/images/360/29.png",
    "/images/360/30.png",
    "/images/360/31.png",
    "/images/360/32.png",
    "/images/360/33.png",
    "/images/360/34.png",
    "/images/360/35.png",
    "/images/360/36.png",
    "/images/360/37.png",
    "/images/360/38.png",
    "/images/360/39.png",
    "/images/360/40.png",
    "/images/360/41.png",
    "/images/360/42.png",
    "/images/360/43.png",
    "/images/360/44.png",
    "/images/360/45.png",
    "/images/360/46.png",
  ];

  return (
    <Canvas>
      {/* Додаємо управління камерою */}
      <OrbitControls enableZoom={false} />
      {/* Викликаємо компонент Panorama і передаємо йому масив зображень */}
      <Panorama images={images} />
    </Canvas>
  );
}
