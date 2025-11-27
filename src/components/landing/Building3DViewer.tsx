import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage } from '@react-three/drei';
import { Suspense } from 'react';

function BuildingModel() {
  const { scene } = useGLTF('/models/building-model.glb');
  return <primitive object={scene} scale={1} />;
}

const Building3DViewer = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] relative">
      <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-3xl" />
      <div className="relative w-full h-full rounded-2xl overflow-hidden">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          className="bg-transparent"
        >
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6}>
              <BuildingModel />
            </Stage>
            <OrbitControls 
              enableZoom={true}
              enablePan={true}
              minDistance={2}
              maxDistance={10}
            />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-muted-foreground bg-background/80 px-4 py-2 rounded-full backdrop-blur-sm">
        Drag to rotate • Scroll to zoom
      </div>
    </div>
  );
};

export default Building3DViewer;
