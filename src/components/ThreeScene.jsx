import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const pointLight = new THREE.PointLight(0x7c3aed, 1.2, 100);
    pointLight.position.set(12, 8, 10);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x38bdf8, 0.8, 100);
    pointLight2.position.set(-12, -8, 10);
    scene.add(pointLight2);

    const ambientLight = new THREE.AmbientLight(0x5b21b6, 0.25);
    scene.add(ambientLight);

    const sphereGeometry = new THREE.SphereGeometry(5.5, 96, 96);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0x4338ca,
      emissive: 0x0f172a,
      roughness: 0.3,
      metalness: 0.4,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    const wireframe = new THREE.LineSegments(
      new THREE.WireframeGeometry(sphereGeometry),
      new THREE.LineBasicMaterial({ color: 0x8b5cf6, linewidth: 1, opacity: 0.35, transparent: true })
    );
    scene.add(wireframe);

    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 700;
    const starsVertices = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount * 3; i++) {
      starsVertices[i] = (Math.random() - 0.5) * 140;
    }
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(starsVertices, 3));
    const starsMaterial = new THREE.PointsMaterial({
      color: 0x8b5cf6,
      size: 0.5,
      transparent: true,
      opacity: 0.55,
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    let animationId = null;

    const animate = () => {
      sphere.rotation.y += 0.0025;
      sphere.rotation.x += 0.0008;
      wireframe.rotation.y += 0.004;
      stars.rotation.y += 0.0005;
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationId) cancelAnimationFrame(animationId);
      renderer.dispose();
      sphereGeometry.dispose();
      starsGeometry.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-20 pointer-events-none" />;
};

export default ThreeScene;
