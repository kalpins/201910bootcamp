const winners = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
]

var player1 = [];
var player2 = [];


const cells = document.querySelectorAll('td');
// console.log(cells)

cells.forEach(cell => cell.addEventListener("click", clicked));

var player = "X";

function nextPlayer() {
    if (player === "X") {
        player = "O"
    } else {
        player = "X"
    }
}



function clicked() {
    // console.log(this)
    this.innerText = player;
    nextPlayer();
    this.removeEventListener("click", clicked)
    // console.log(this.id)
    playerClicked(player, this.id);



    checkWinner();

}

function playerClicked(player, cell) {
    if (player === "X") {
        player1.push(cell * 1)
        console.log(player1)
    } else {
        player2.push(cell * 1)
        console.log(player2)
    }
}

function checkWinner() {
    // console.log(winners.includes(player1));
    winners.forEach(win => {
        console.log(win.every(val => player1.includes(val)));
        console.log(win.every(val => player2.includes(val)));
        // console.log(win.some(elem => player1.indexOf(elem) > -1));
        // console.log(win.some(elem => player2.indexOf(elem) > -1));
        // console.log(player1.includes(win));
        // console.log(player2.includes(win));
        // console.log(win.every(function (value) {
        //     return (player1.indexOf(value) >= 0);
        // }));
        // console.log(arrayContainsArray(player1, win))
        // console.log(win.filter(function (item) {
        //     return player1.includes(item)
        // }))
        // console.log(player1)
        // console.log(win)
    })
}

function arrayContainsArray(superset, subset) {
    return subset.some(function (value) {
        return (superset.indexOf(value) >= 0);
    });
}