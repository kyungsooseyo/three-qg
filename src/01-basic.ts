import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

let scene: THREE.Scene,
  cube: THREE.Object3D<THREE.Object3DEventMap>,
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer
let axisHelper = new THREE.AxesHelper(50)
function init() {
  scene = new THREE.Scene()
  scene.add(axisHelper)
  const geometry = new THREE.BoxGeometry(20, 20, 20)
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  cube = new THREE.Mesh(geometry, material)
  cube.position.set(0, 0, 0)
  scene.add(cube)
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(100, 100, 100)
  camera.lookAt(cube.position)
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  const controls = new OrbitControls(camera, renderer.domElement)
  // controls.enableDamping = true
  // controls.dampingFactor = 0.25
  // controls.enableZoom = true
  // controls.autoRotate = true
  // controls.autoRotateSpeed = 0.5
  controls.addEventListener('change', () => {
    renderer.render(scene, camera)
  })
}
init()
function render() {
  requestAnimationFrame(render)
  // camera.position.z += 0.01
  // camera.position.y += 0.01

  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  renderer.render(scene, camera)
}
render()
