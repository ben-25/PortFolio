import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, type TextProps } from "@react-three/drei";

function FaceText(props: TextProps) {
  return (
    <Text
      fontSize={0.4}
      maxWidth={3.5}
      textAlign="center"
      anchorX="center"
      anchorY="middle"
      color="rgb(240, 240, 240)"
      {...props}
    />
  );
}

function Cube() {
  return (
    <mesh>
        <meshStandardMaterial color="#6c5ce7" />
        <boxGeometry args={[4, 4, 4]} />

        <FaceText position= {[2.01, 0, 0]} rotation={[0, -Math.PI / 2, 0]} scale={[-1, 1, 1]}>Développeur passionné par la création d’expériences web modernes</FaceText>
        <FaceText position= {[-2.01, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>La musique occupe une grande place dans mon quotidien</FaceText>
        <FaceText position= {[0, 2.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>J’aime passer du temps à explorer de nouveaux concepts visuels</FaceText>
        <FaceText position= {[0, -2.01, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, -1, -1]}>Toujours en train d’expérimenter de nouvelles idées et technologies</FaceText>
        <FaceText position= {[0, 0, 2.01]}>Salut, moi c’est Benjamin</FaceText>
        <FaceText position= {[0, 0, -2.01]} scale={[-1, 1, 1]}>J’ai grandi avec les jeux vidéo et j’y trouve encore beaucoup d’inspiration</FaceText>
    </mesh>
  );
}

export default function CubeAbout() {
  const isMobile = window.innerWidth < 768;
  return (
    <Canvas
      camera={{
        position: isMobile ? [3, 2.5, 10] : [3, 2.5, 7],
        fov: isMobile ? 70 : 50,
      }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[3, 5, 2]} intensity={1.5} />

      <Cube />
      <OrbitControls />
    </Canvas>
  );
}