let boss=null

function spawnBoss(){

const geo = new THREE.SphereGeometry(2,32,32)

const mat = new THREE.MeshBasicMaterial({
color:0x5500aa
})

boss = new THREE.Mesh(geo,mat)

boss.position.z=-100

scene.add(boss)

}

function updateBoss(){

if(!boss) return

boss.position.z+=0.4

}