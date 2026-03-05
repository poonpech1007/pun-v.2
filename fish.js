const fishes=[]

function createFish(){

const geo = new THREE.BoxGeometry(0.5,0.2,0.2)

const mat = new THREE.MeshBasicMaterial({
color:0xff8844
})

const fish = new THREE.Mesh(geo,mat)

fish.position.x=(Math.random()-0.5)*10
fish.position.y=(Math.random()-0.5)*5
fish.position.z=-50

scene.add(fish)

fishes.push(fish)

}

for(let i=0;i<20;i++){
createFish()
}

function updateFish(){

fishes.forEach(f=>{

f.position.z+=0.3

if(f.position.z>5){

f.position.z=-50

}

})

}