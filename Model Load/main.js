import * as THREE from '/three.js-r132/build/three.module.js';
import {GLTFLoader} from "./three.js-r132/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setClearColor(0x000000, 1);
renderer.clear();

//new new THREE.PerspectiveCamera(FOV, viewAspectRatio, zNear, zFar)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2;

const color = 0xFFFFFF;
// const intensity = 30;
// const distance = 20;

const light = new THREE.DirectionalLight(color);
light.position.set(0, -0.4, 5);
scene.add(light);


renderer.render(scene, camera);

var raccoon = null;
const loader = new GLTFLoader();
loader.load(
	// resource URL
	'/musicband-raccoon/scene.gltf',
	// called when the resource is loaded
	function ( gltf ) {
    console.log(gltf);
    raccoon = gltf.scene;
    raccoon.scale.set(0.1, 0.1, 0.1);
    raccoon.position.set(0, -0.4, 0);
		scene.add( raccoon );

	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  raccoon.rotation.y += 0.01;
};

animate();




