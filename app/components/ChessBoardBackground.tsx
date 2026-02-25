"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";


// ================= ROTATING BOARD =================

function RotatingBoard({ children }: any) {

    const ref = useRef<any>(null);

    useFrame(() => {

        if (ref.current) {

            ref.current.rotation.y += 0.0012;

        }

    });

    return <group ref={ref}>{children}</group>;

}



// ================= CHESS BOARD =================

function ChessBoard() {

    const squares = [];

    const size = 8;

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

                        (z - size / 2) * tile

                    ]}

                    receiveShadow

                >

                    <boxGeometry args={[tile, 0.12, tile]} />

                    <meshStandardMaterial

                        color={isGreen ? "#1F7A3A" : "#F5F5F5"}

                        roughness={0.4}

                        metalness={0.2}

                    />

                </mesh>

            );

        }

    }

    return <>{squares}</>;

}



// 👑 ONE SQUARE MOVES
const moves = [

    [0, 0],

    [1.5, 0],

    [1.5, 1.5],

    [0, 1.5],

    [-1.5, 1.5],

];




// ================= KING MODEL =================

function KingModel({ color }: { color: string }) {

    return (

        <group scale={[0.6, 0.6, 0.6]}>

            <mesh position={[0, -0.8, 0]}>

                <cylinderGeometry args={[1.1, 1.3, 0.5, 64]} />

                <meshStandardMaterial

                    color={color}

                    metalness={1}

                    roughness={0.15}

                />

            </mesh>


            <mesh>

                <cylinderGeometry args={[0.4, 0.7, 2.5, 64]} />

                <meshStandardMaterial color={color} metalness={1} />

            </mesh>


            <mesh position={[0, 1.2, 0]}>

                <torusGeometry args={[0.6, 0.12, 32, 100]} />

                <meshStandardMaterial color={color} />

            </mesh>


            <mesh position={[0, 1.9, 0]}>

                <sphereGeometry args={[0.35, 64, 64]} />

                <meshStandardMaterial color={color} />

            </mesh>


            <mesh position={[0, 2.4, 0]}>

                <boxGeometry args={[0.15, 0.7, 0.15]} />

                <meshStandardMaterial color={color} />

            </mesh>


            <mesh

                position={[0, 2.6, 0]}

                rotation={[0, 0, Math.PI / 2]}

            >

                <boxGeometry args={[0.15, 0.7, 0.15]} />

                <meshStandardMaterial color={color} />

            </mesh>

        </group>

    );

}



// ================= TWO KINGS =================

function Kings() {

    const goldRef = useRef<any>(null);

    const whiteRef = useRef<any>(null);

    const [target, setTarget] = useState(0);


    // scroll detect

    useEffect(() => {

        const handleScroll = () => {

            const y = window.scrollY;

            if (y < 600) setTarget(0);

            else if (y < 1400) setTarget(1);

            else if (y < 2200) setTarget(2);

            else if (y < 3000) setTarget(3);

            else setTarget(4);

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);


    // animation

    useFrame(() => {

        const goldTarget =

            new THREE.Vector3(

                moves[target][0],

                0.6,

                moves[target][1]

            );


        // opposite movement

        const whiteTarget =

            new THREE.Vector3(

                -moves[target][0],

                0.6,

                -moves[target][1]

            );


        if (goldRef.current)

            goldRef.current.position.lerp(

                goldTarget,

                0.05

            );


        if (whiteRef.current)

            whiteRef.current.position.lerp(

                whiteTarget,

                0.05

            );

    });


    return (

        <>

            {/* GOLD KING */}

            <group

                ref={goldRef}

                position={[0, 0.6, 0]}

            >

                <KingModel color="#D4AF37" />

            </group>


            {/* WHITE KING */}

            <group

                ref={whiteRef}

                position={[0, 0.6, 3]}

            >

                <KingModel color="#F5F5F5" />

            </group>

        </>

    );

}



// ================= MAIN =================

export default function ChessBoardBackground() {

    return (

        <Canvas

            shadows

            camera={{ position: [6, 6, 8], fov: 45 }}

            style={{ background: "#06020F" }}

        >

            <ambientLight intensity={1} />

            <directionalLight

                position={[5, 10, 5]}

                intensity={2.5}

                castShadow

            />

            <pointLight

                position={[0, 4, 0]}

                intensity={6}

                color="#FFD700"

            />


            <RotatingBoard>

                <ChessBoard />

                <Kings />

            </RotatingBoard>


            <OrbitControls

                enableZoom={false}

                enablePan={false}

            />

        </Canvas>

    );

}