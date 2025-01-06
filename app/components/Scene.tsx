"use client";

import { Center, Grid, OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Lighting } from "./Lighting";

export const Scene = () => {
  const build = useGLTF("./models/build.glb");
  console.log(build);
  console.log(build.scene.position);

  return (
    <>
      <OrbitControls />
      {/* <axesHelper args={[5]} /> */}
      {/* <Grid args={[90, 90]} /> */}
      <Lighting />
      <Center position={[0, 0, 0]} scale={[0.05, 0.05, 0.05]}>
        {/* <primitive object={build.scene} position={[0, 0, 0]} scale={[0.01, 0.01, 0.01]} /> */}
      </Center>
      {/* <Environment files={"./textures/quatro.hdr"} ground={{ height: 80, radius: 90, scale: 90 }}></Environment> */}
    </>
  );
};

useGLTF.preload("./models/build.glb");
