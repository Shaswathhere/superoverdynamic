

const strikeButton = document.getElementById("bat")
const resetButton = document.getElementById("reset")
const team1score = document.getElementById("runs1")
const team2score = document.getElementById("runs2")
const team1wickets = document.getElementById("wickets1")
const team2wickets = document.getElementById("wickets2")


var Team1score = 0
var Team2score = 0
var Team1wickets = 0
var Team2wickets = 0
var Team1balls = 0
var Team2balls = 0
var toss = 1

const RandomNumbers = ["W",0,1,2,3,4,5,6]

function result () {
    if (Team1score>Team2score) 
    {
        alert("IND WINS")    
    }
    if (Team2score>Team1score)
    {
        alert("PAK WINS")    
    }
    if (Team1score === Team2score) 
    {
        alert("Match Draws Again")    
    }
}

function updateScore() {
    team1score.textContent = Team1score
    team1wickets.textContent = Team1wickets
    team2score.textContent = Team2score
    team2wickets.textContent = Team2wickets
    console.log("1", team2score)
    console.log("2", team2wickets)

}

resetButton.onclick = () => {
    window.location.reload();
};

strikeButton.onclick = () => {
    var randomElements = RandomNumbers[Math.floor(Math.random() * 8)]
    if (toss===2)
    {
        Team2balls++
        console.log(Team2balls)
        document.querySelector(`#team2 div:nth-child(${Team2balls})`).textContent = randomElements;
        if (randomElements == "W")
        {
            Team2wickets++
            console.log(Team2wickets)
        }
        else
        {
            Team2score = Team2score + randomElements
            console.log(Team2score)
        }
        if (Team2balls === 6 || team2wickets === 2 || team2score > team1score)
        {
            toss = 3
            result()
        }
    }
    if (toss===1)
    console.log(team1score)
    {
        Team1balls++
        document.querySelector(`#team1 div:nth-child(${Team1balls})`).text = randomElements;
        if (randomElements == "W")
        {
            Team1wickets++
            console.log(Team1wickets)
        }
        else
        {

            Team1score = Team1score + randomElements
            console.log(Team1score)

        }
        if (Team1balls === 6 || team1wickets === 2 )
        {
            toss = 2
        }
    }
    updateScore()
}