'use client';

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

import "./Background.scss";

const ThreeJSBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // シーン、カメラ、レンダラーの作成
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer; // リファレンスに保存

    // パーティクル用のテクスチャをロード
    const textureLoader = new THREE.TextureLoader();
    const particleTexture = textureLoader.load("/images/star.png"); // ぼかしのかかった丸い画像を使用

    // パーティクルの作成
    const particleCount = 8000; // パーティクルの数
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3); // x, y, z の座標

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10; // X座標
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // Y座標
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // Z座標
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      map: particleTexture, // 丸いテクスチャ
      color: 0xffffff, // 白いパーティクル
      size: 0.02, // 小さめ
      transparent: true, // 透明背景
      alphaTest: 0.5, // 透明度の設定
      depthWrite: false, // 深度バッファを無効化（半透明効果）
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // リサイズ時に更新する関数
    const onResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
    };

    window.addEventListener("resize", onResize); // リサイズイベントを追加

    // アニメーションループ
    const animate = () => {
      requestAnimationFrame(animate);
      particleSystem.rotation.y += 0.0005; // ゆっくり回転
      renderer.render(scene, camera);
    };

    animate();

    // クリーンアップ処理
    return () => {
      window.removeEventListener("resize", onResize); // イベントリスナー削除
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="threejs_container"></div>;
};

export default ThreeJSBackground;

