'use client';

import { Euler, Vector3 } from 'three';

interface WallProps {
  position: Vector3;
  height: number;
  width: number;
  rotation?: Euler;
}

function Wall({ position, height, width, rotation }: WallProps) {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[width, height, 1]} />
      <meshBasicMaterial color="grey" />
    </mesh>
  );
}

export function Room() {
  const wallDimensions = {
    height: 5,
    width: 5,
  };
  return (
    <>
      <Wall position={new Vector3(0, 0, 0)} {...wallDimensions} />
      <Wall
        position={new Vector3(2.5, 0, 0)}
        {...wallDimensions}
        rotation={new Euler(0, -Math.PI / 2)}
      />
    </>
  );
}
