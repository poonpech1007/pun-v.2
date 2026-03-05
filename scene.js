const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth,window.innerHeight)

document.body.appendChild(renderer.domElement)

camera.position.z = 5

scene.background = new THREE.Color(0x001e2f)

const tunnelGeometry = new THREE.CylinderGeometry(
5,
5,
200,
32,
1,
true
)

const tunnelMaterial = new THREE.MeshBasicMaterial({
color:0x0099ff,
wireframe:false,
side:THREE.DoubleSide
})

const tunnel = new THREE.Mesh(
tunnelGeometry,
tunnelMaterial
)

tunnel.rotation.x = Math.PI/2

scene.add(tunnel)