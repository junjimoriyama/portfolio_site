"use client";

// react
import React, { useEffect, useRef, useState } from "react";
import { useSwitchContext } from "@/components/context/switchProvider";
// three.js
import * as THREE from "three";
// svg
import { RocketSvg } from "@/assets/svg/RocketSvg";
import { UFOSvg } from "@/assets/svg/UFO";
import { SaturnSvg } from "@/assets/svg/SaturnSvg";
import { MarseSvg } from "@/assets/svg/MarseSvg";
import { AstronautSvg } from "@/assets/svg/AstronautSvg";
// style
import "./Background.scss";
import {
  EffectComposer,
  RenderPass,
  UnrealBloomPass,
} from "three/examples/jsm/Addons.js";

export const Background: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const animationFrameId = useRef<number | null>(null);

  // スイッチの状態
  const { isSwitchOn } = useSwitchContext();
  // 背景の表示
  const [isStart, setIsStart] = useState(false);

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
    // カメラの距離
    camera.position.z = 1;

    // renderer定義
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    // renderer画面サイズに
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // ブルームエフェクトの追加
    const rendererScreen = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.0, // ブルームの強度
      0.1, // 半径
      0.85 // しきい値
    );
    bloomPass.threshold = 0.2;
    bloomPass.strength = 1.5
    bloomPass.radius = 0.01;

    const bloomComposer = new EffectComposer(renderer);
    bloomComposer.setSize(window.innerWidth, window.innerHeight);
    bloomComposer.renderToScreen = true;
    bloomComposer.addPass(rendererScreen);
    bloomComposer.addPass(bloomPass);

    const color = new THREE.Color("#FD8813");

    // 球体の作成
    const geometry = new THREE.IcosahedronGeometry(0.5, 15);
    const material = new THREE.MeshStandardMaterial({
      color: color,
      emissive: color, // 発光色
      emissiveIntensity: 2, // 発光の強度
    });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(0, 0, 0);
    sphere.layers.set(1)
    scene.add(sphere);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1); // 環境光を追加
    scene.add(ambientLight);



    // パーティクル用のテクスチャをロード
    const textureLoader = new THREE.TextureLoader();
    const particleTexture = textureLoader.load("/images/star.png");

    // パーティクルの作成
    const particleCount = 1000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    // X,Y,Z座標それぞれ設定
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // パーティクルの設定
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
      // bloomも調整
      bloomComposer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onResize);

    // アニメーションループ
    const animate = () => {
      if (!rendererRef.current) return;
      particleSystem.rotation.y += 0.0005;
      renderer.render(scene, camera);
      sphere.layers.set(1)
      bloomComposer.render()
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
        // Three.js のキャンバスを削除
        mountRef.current.innerHTML = "";
      }
      rendererRef.current = null;
    }

    if (sceneRef.current) {
      sceneRef.current.clear();
      sceneRef.current = null;
    }
  };

  return (
    <>
      {isStart && <div ref={mountRef} className="threejs_container"></div>}
      <div className="saturn">{!isSwitchOn && <SaturnSvg />}</div>
      <div className="mars">{!isSwitchOn && <MarseSvg />}</div>
      <div className="rocket">{!isSwitchOn && <RocketSvg />}</div>
      <div className="ufo">{!isSwitchOn && <UFOSvg />}</div>
      <div className="astronaut">{!isSwitchOn && <AstronautSvg />}</div>
    </>
  );
};

export default Background;
