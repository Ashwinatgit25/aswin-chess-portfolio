"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function RotatingBoard({ children }: any) {

    const ref = useRef<any>(null);

    useFrame(() => {

        if (ref.current) {

            ref.current.rotation.y += 0.0015;

        }

    });

    return (

        <group ref={ref}>

            {children}

        </group>

    );

}

function ChessBoard() {

    const squares = [];

    const size = 8; // 8x8 chess board
    const tile = 1.5;

    for (let x = 0; x < size; x++) {

        for (let z = 0; z < size; z++) {

            const isGreen = (x + z) % 2 === 0;

            squares.push(

                <mesh
                    key={`${x}-${z}`}
                    position={[
                        (x - size / 2) * tile,
                        0,
                        (z - size / 2) * tile,
                    ]}
                    receiveShadow
                    castShadow
                >

                    <boxGeometry args={[tile, 0.1, tile]} />

                    <meshStandardMaterial
                        color={isGreen ? "#1F7A3A" : "#F5F5F5"} // GREEN + WHITE
                        roughness={0.4}
                        metalness={0.2}
                    />

                </mesh>
            );
        }
    }

    return <>{squares}</>;
}


// 👑 KING PIECE

function KingPiece() {

    return (

        <group position={[0, 0.6, 0]} scale={[0.6, 0.6, 0.6]} castShadow>

            {/* 👑 BASE */}

            <mesh position={[0, -0.8, 0]} castShadow>

                <cylinderGeometry args={[1.1, 1.3, 0.5, 64]} />

                <meshStandardMaterial
                    color="#D4AF37"
                    metalness={1}
                    roughness={0.2}
                />

            </mesh>


            {/* BODY */}

            <mesh castShadow>

                <cylinderGeometry args={[0.4, 0.7, 2.5, 64]} />

                <meshStandardMaterial
                    color="#D4AF37"
                    metalness={1}
                    roughness={0.2}
                />

            </mesh>


            {/* SHOULDER RING */}

            <mesh position={[0, 1.2, 0]} castShadow>

                <torusGeometry args={[0.6, 0.12, 32, 100]} />

                <meshStandardMaterial
                    color="#D4AF37"
                    metalness={1}
                    roughness={0.2}
                />

            </mesh>


            {/* HEAD BALL */}

            <mesh position={[0, 1.9, 0]} castShadow>

                <sphereGeometry args={[0.35, 64, 64]} />

                <meshStandardMaterial
                    color="#D4AF37"
                    metalness={1}
                    roughness={0.2}
                />

            </mesh>


            {/* 👑 CROSS TOP */}

            <mesh position={[0, 2.4, 0]} castShadow>

                <boxGeometry args={[0.15, 0.7, 0.15]} />

                <meshStandardMaterial
                    color="#D4AF37"
                    metalness={1}
                    roughness={0.2}
                />

            </mesh>


            <mesh position={[0, 2.6, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>

                <boxGeometry args={[0.15, 0.7, 0.15]} />

                <meshStandardMaterial
                    color="#D4AF37"
                    metalness={1}
                    roughness={0.2}
                />

            </mesh>

        </group>

    );

}


export default function ChessBoardBackground() {

    return (

        <Canvas

            shadows

            camera={{ position: [6, 6, 8], fov: 45 }}

            gl={{ alpha: false }}

            style={{

                background: "#11064d"

            }}

        >

            {/* LIGHTING */}

            <ambientLight intensity={0.8} />

            <directionalLight
                position={[5, 10, 5]}
                intensity={2}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />

            {/* GOLD SPOTLIGHT KING */}

            <pointLight
                position={[0, 4, 0]}
                intensity={7}
                color="#D4AF37"
            />
            <RotatingBoard>
                <ChessBoard />

                <KingPiece />
            </RotatingBoard>

            <OrbitControls
                enableZoom={false}
                enablePan={false}
            />

        </Canvas>

    );
}