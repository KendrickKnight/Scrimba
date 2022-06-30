
let team1 = document.getElementById('team1')
let team2 = document.getElementById('team2')

console.log(parseInt(team1) + 1)

function addScoreT1(addedScore){ team1.textContent = parseInt(team1.innerHTML) + addedScore; console.log(team1)
    if (parseInt(team1.innerHTML) > parseInt(team2.innerHTML)){
        team1.classList.add('ahead')
        team2.classList.remove('ahead')
    }
}

function addScoreT2(addedScore){ team2.textContent = parseInt(team2.innerHTML) + addedScore; console.log(team2)
    if (parseInt(team1.innerHTML) < parseInt(team2.innerHTML)){
        team2.classList.add('ahead')
        team1.classList.remove('ahead')
    }

}

function newGame() {
    team1.textContent=0
    team2.textContent=0
    team1.classList.remove('ahead')
    team2.classList.remove('ahead')
}


