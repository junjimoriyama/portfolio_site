"use client";

// react
import React, { useEffect, useRef, useState } from "react";
import { useSwitchContext } from "@/components/context/switchProvider";
// three.js
import * as THREE from "three";
import {
  EffectComposer,
  OrbitControls,
  RenderPass,
  UnrealBloomPass,
} from "three/examples/jsm/Addons.js";
// svg
import { RocketSvg } from "@/assets/svg/RocketSvg";
import { UFOSvg } from "@/assets/svg/UFO";
import { SaturnSvg } from "@/assets/svg/SaturnSvg";
import { MarseSvg } from "@/assets/svg/MarseSvg";
import { AstronautSvg } from "@/assets/svg/AstronautSvg";
// style
import "./Background.scss";
import { NeptuneSvg } from "@/assets/svg/NeptuneSvg";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


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
    camera.position.z = 5;

    // renderer定義
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    // ピクセル比率を明示的に設定
    renderer.setPixelRatio(window.devicePixelRatio);
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
    // ブルームの適用範囲
    bloomPass.threshold = 0.2;
    // 発光効果の強さ
    bloomPass.strength = 1
    // ブルームの広がり
    bloomPass.radius = 0.1;

    const bloomComposer = new EffectComposer(renderer);
    bloomComposer.setSize(window.innerWidth, window.innerHeight);
    bloomComposer.renderToScreen = true;
    bloomComposer.addPass(rendererScreen);
    bloomComposer.addPass(bloomPass);

    // パーティクル用のテクスチャをロード
    const textureLoader = new THREE.TextureLoader();
    const particleTexture = textureLoader.load("/images/star.png");

    // パーティクルの作成
    const particleCount = 3000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    // X,Y,Z座標それぞれ設定
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // パーティクルの設定
    const particleMaterial = new THREE.PointsMaterial({
      map: particleTexture,
      color: 0xffffff,
      size: 0.035,
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

     // OrbitControls の追加
     const controls = new OrbitControls(camera, renderer.domElement);
     controls.enableDamping = true; // 慣性効果を有効化
     controls.dampingFactor = 0.1; // 慣性の強さ
     controls.minDistance = 2; // 最小ズーム距離
     controls.maxDistance = 10; // 最大ズーム距離
     controls.maxPolarAngle = Math.PI / 2; // 垂直方向の回転制限（例: 真上を見ない）
 

    // アニメーションループ
    const animate = () => {
      if (!rendererRef.current) return;
      controls.update();
      particleSystem.rotation.y += 0.0005;

      // sphere.layers.set(1)
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
      <div className="neptune">{!isSwitchOn && <NeptuneSvg />}</div>
    </>
  );
};

export default Background;
