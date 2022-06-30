
let team1 = document.getElementById('team1')
let team2 = document.getElementById('team2')

console.log(parseInt(team1) + 1)

function addScoreT1(addedScore){ team1.textContent = parseInt(team1.innerHTML) + addedScore; console.log(team1)}

function addScoreT2(addedScore){ team2.textContent = parseInt(team2.innerHTML) + addedScore; console.log(team2)}




