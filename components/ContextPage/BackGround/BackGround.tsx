"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

import "./Background.scss";
import { useSwitchContext } from "@/components/context/switchProvider";
import { RocketSvg } from "@/assets/svg/RocketSvg";
import { UFOSvg } from "@/assets/svg/UFO";
import { AstronautSvg } from "@/assets/svg/Astronaut";
import { SaturnSvg } from "@/assets/svg/SaturnSvg";

export const Background: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const animationFrameId = useRef<number | null>(null);

  const [isStart, setIsStart] = useState(false);
  const { isSwitchOn } = useSwitchContext();

  let sunMesh: THREE.Mesh | null = null;

  // 4秒後にThree.jsを開始
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStart(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!mountRef.current || !isStart) return;

    if (isSwitchOn) {
      // Three.js のシーンを削除
      cleanupScene();
      return;
    }

    // Three.js の初期化
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x0a0a0a);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // // 太陽の作成（テクスチャなし）
    // const sunGeometry = new THREE.SphereGeometry(5, 32, 32); // 球体
    // const sunMaterial = new THREE.MeshStandardMaterial({
    //   color: new THREE.Color(0xffd700), // 太陽の基本色（黄色）
    //   emissive: new THREE.Color(0xffa500), // 発光色
    //   emissiveIntensity: 1.5, // 発光の強さ
    //   roughness: 0.5, // 表面の荒さ
    //   metalness: 0.0, // 非金属的な見た目
    // });
    // sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
    // scene.add(sunMesh);

    // 太陽光
    // const pointLight = new THREE.PointLight(0xfff3a5, 2, 100);
    // pointLight.position.set(0, 0, 10);
    // scene.add(pointLight);

    /* 平行光源 */
    

    // パーティクル用のテクスチャをロード
    const textureLoader = new THREE.TextureLoader();
    const particleTexture = textureLoader.load("/images/star.png");

    // パーティクルの作成
    const particleCount = 5000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      map: particleTexture,
      color: 0xffffff,
      size: 0.03,
      transparent: true,
      alphaTest: 0.5,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // リサイズ時の処理
    const onResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
    };

    window.addEventListener("resize", onResize);

    // アニメーションループ
    const animate = () => {
      if (!rendererRef.current) return;

      // 太陽の自転
      if (sunMesh) sunMesh.rotation.y += 0.001;

      // パーティクルの回転
      particleSystem.rotation.y += 0.0005;

      renderer.render(scene, camera);
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    // クリーンアップ処理
    return () => {
      window.removeEventListener("resize", onResize);
      cleanupScene();
    };
  }, [isSwitchOn, isStart]); // isStart の変更も監視

  // Three.js のシーンを削除する関数
  const cleanupScene = () => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }

    if (rendererRef.current) {
      rendererRef.current.dispose();
      if (mountRef.current) {
        mountRef.current.innerHTML = ""; // Three.js のキャンバスを削除
      }
      rendererRef.current = null;
    }

    if (sceneRef.current) {
      sceneRef.current.clear();
      sceneRef.current = null;
    }

    if (sunMesh) {
      sunMesh.geometry.dispose();
      if (sunMesh.material instanceof THREE.Material) {
        sunMesh.material.dispose();
      }
      sunMesh = null;
    }
  };

  return (
    <>
      {isStart && <div ref={mountRef} className="threejs_container"></div>}
      <div className="saturn">{!isSwitchOn && <SaturnSvg />}</div>
      <div className="rocket">{!isSwitchOn && <RocketSvg />}</div>
      <div className="ufo">{!isSwitchOn && <UFOSvg />}</div>
      <div className="astronaut">{!isSwitchOn && <AstronautSvg />}</div>
    </>
  );
};

export default Background;
