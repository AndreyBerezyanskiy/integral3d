"use client";

import { Canvas } from "@react-three/fiber";
import { Scene } from "../components/Scene";

const ScenePage = () => {
  return (
    <>
      <h1>3D Scene</h1>
      <div className="fixed top-0 left-0 w-full h-full">
        <Canvas>
          <Scene />
        </Canvas>
      </div>
    </>
  );
};

export default ScenePage;
