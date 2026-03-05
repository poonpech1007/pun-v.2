let score=0

function animate(){

requestAnimationFrame(animate)

tunnel.position.z+=0.5

updateFish()

updateParticles()

updateBoss()

score++

// spawn boss when score passes 2000 and it hasn't appeared yet
if(score > 2000 && !boss){
spawnBoss();
}

renderer.render(scene,camera)

}

animate()