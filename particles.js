const bubbles=[]

function createBubble(){

const geo = new THREE.SphereGeometry(0.05,8,8)

const mat = new THREE.MeshBasicMaterial({
color:0x99ddff
})

const bubble = new THREE.Mesh(geo,mat)

bubble.position.x=(Math.random()-0.5)*8
bubble.position.y=-5
bubble.position.z=(Math.random()*50)-50

scene.add(bubble)

bubbles.push(bubble)

}

for(let i=0;i<100;i++){
createBubble()
}

function updateParticles(){

bubbles.forEach(b=>{

b.position.y+=0.05

if(b.position.y>5){

b.position.y=-5

}

})

}