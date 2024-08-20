import React from "react";
import { useGLTF } from "@react-three/drei";

export function Build(props) {
  const { nodes, materials } = useGLTF("models/build.glb");

  return (
    <group {...props} dispose={null}>
      <group position={[303.655, 38.425, 73.177]}>
        <mesh geometry={nodes.Mesh015.geometry} material={materials["Material.003"]} />
        <mesh geometry={nodes.Mesh015_1.geometry} material={materials.Сіра} />
      </group>
      <mesh
        geometry={nodes.Attached_Obj_001005.geometry}
        material={materials["Ñòåêëî ÒÎÍÎÂÀÍÅ.002"]}
        position={[303.254, 40.391, 75.066]}
      />
      <mesh
        geometry={nodes.Object027025.geometry}
        material={nodes.Object027025.material}
        position={[303.294, 36.585, 75.066]}
      />
      <group position={[307.87, 36.862, 80.891]}>
        <mesh geometry={nodes.Mesh042.geometry} material={materials[" ÁÌ | ÁÅÒÎÍ | Êî.002"]} />
        <mesh geometry={nodes.Mesh042_1.geometry} material={materials["ÊÎË²Ð (ñ³ðèé ôàñ.002"]} />
        <mesh geometry={nodes.Mesh042_2.geometry} material={materials[" Ï²ÄËÎÃÈ | Ïëèòê.002"]} />
      </group>
      <mesh
        geometry={nodes.Object005001.geometry}
        material={nodes.Object005001.material}
        position={[303.251, 12.245, 84.761]}
      />
      <group position={[303.264, 39.776, 75.039]}>
        <mesh geometry={nodes.Mesh115.geometry} material={materials["Ñòåêëî ãîëóáîå"]} />
        <mesh geometry={nodes.Mesh115_1.geometry} material={materials["Ñòåêëî - Ãîëóáîå.002"]} />
      </group>
      <group position={[303.255, 40.276, 83.105]}>
        <mesh geometry={nodes.Mesh124.geometry} material={materials.Білі_Балкони} />
        <mesh geometry={nodes.Mesh124_1.geometry} material={materials.Окантовка_Біла} />
        <mesh geometry={nodes.Mesh124_2.geometry} material={materials.Світло_Білі_Балкони} />
        <mesh geometry={nodes.Mesh124_3.geometry} material={materials.Темний_Пластик_Чвітло} />
      </group>
      <mesh
        geometry={nodes.Object028001.geometry}
        material={materials["ÊÎË²Ð 05"]}
        position={[303.166, 68.813, 86.401]}
      />
      <mesh
        geometry={nodes.Attached_Obj_001008.geometry}
        material={materials["Material.007"]}
        position={[305.13, 76.033, 75.189]}
      />
      <group position={[293.207, 38.815, 71.391]}>
        <mesh geometry={nodes.Mesh130.geometry} material={materials.Сіра} />
        <mesh geometry={nodes.Mesh130_1.geometry} material={materials.Світло_Білі_Балкони} />
        <mesh geometry={nodes.Mesh130_2.geometry} material={materials.Темний_Пластик_Чвітло} />
      </group>
      <mesh
        geometry={nodes.Object019001.geometry}
        material={materials["Êðàñêà - Àíòðàöè.002"]}
        position={[303.281, 55.492, 74.206]}
      />
      <mesh geometry={nodes.Object027024.geometry} material={materials.Сіра} position={[304.229, 42.472, 75.224]} />
      <mesh geometry={nodes.Object017003.geometry} material={materials.Glass} position={[311.578, 34.31, 58.533]} />
      <mesh
        geometry={nodes.Object025003.geometry}
        material={materials["ÊÎË²Ð 01.002"]}
        position={[303.254, 74.831, 75.049]}
      />
      <mesh geometry={nodes.Object027004.geometry} material={materials.Сіра} position={[303.044, 34.298, 91.848]} />
      <group position={[303.251, 40.322, 75.072]}>
        <mesh geometry={nodes.Mesh010.geometry} material={materials["Êðàñêà - Àíòðàöè.002"]} />
        <mesh geometry={nodes.Mesh010_1.geometry} material={materials["Êðàñêà - Àíòðàöè.010"]} />
      </group>
      <mesh
        geometry={nodes.Рами_Будинок002.geometry}
        material={materials["Êðàñêà - Àíòðàöè.002"]}
        position={[311.575, 34.462, 58.53]}
      />
      <mesh
        geometry={nodes.Object039001.geometry}
        material={materials["Material.004"]}
        position={[303.254, 70.322, 75.066]}
      />
      <mesh
        geometry={nodes.Object039002.geometry}
        material={materials["Êðàñêà - Àíòðàöè.008"]}
        position={[313.744, 68.525, 76.536]}
      />
      <mesh
        geometry={nodes.Object039004.geometry}
        material={materials["Êðàñêà - Àíòðàöè.010"]}
        position={[311.772, -5.07, 78.646]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("models/build.glb");
