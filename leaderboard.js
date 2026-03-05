// leaderboard.js - Leaderboard functionality

function sendScore(name,score){

fetch("php/save_score.php",{
method:"POST",
headers:{
"Content-Type":"application/x-www-form-urlencoded"
},
body:`name=${name}&score=${score}`
});

}