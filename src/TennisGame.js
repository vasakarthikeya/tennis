var TennisGame = function () {

    var scoreBoard = {
        player1: "0",
        player2: "0",
        result: ""
    };
    var playerOnePoints = 0;
    var playerTwoPoints = 0;
    var POINTS_TO_SCORE = {
        1: "15",
        2: "30",
        3: "40"
    };
    var deuceGame = false;
    var advantagePlayer;

    this.playerOneScored = function () {
        playerOnePoints++;

        setScore(pointsToScore(playerOnePoints), "player1");

        if (isDeuceGame()) {
            advantagePlayer = "player1";
        }

        decideWinner();
    }

    this.playerTwoScored = function () {
        playerTwoPoints++;

        setScore(pointsToScore(playerTwoPoints), "player2");

        if (isDeuceGame()) {
            advantagePlayer = "player2";
        }

        decideWinner();
    }

    this.getScore = function () {
        return scoreBoard;
    }

    function decideWinner() {
        if (!deuceGame) {
            if (isDeucePoints()) {
                deuceGame = true;
                scoreBoard.result = "Deuce";
            } else if (playerOnePoints > 3 && playerOnePoints > playerTwoPoints) {
                scoreBoard.result = "Player1 wins.";
            } else if (playerTwoPoints > 3 && playerTwoPoints > playerOnePoints) {
                scoreBoard.result = "Player2 wins.";
            }
        } else {
            if (playerOnePoints === 4 && playerOnePoints === playerTwoPoints) {
                playerOnePoints--;
                playerTwoPoints--;
                scoreBoard.result = "Deuce";
            } else if (advantagePlayer === "player1") {
                scoreBoard.result = "Player1 gets advantage";
            } else if (advantagePlayer === "player2") {
                scoreBoard.result = "Player2 gets advantage";
            }
        }
    }

    function isDeuceGame() {
        return deuceGame;
    }

    function isDeucePoints() {
        return (playerOnePoints === 3 && playerOnePoints === playerTwoPoints);
    }

    function setScore(score, player) {
        if (score) {
            scoreBoard[player] = score;
        }
    }

    function pointsToScore(points) {
        return POINTS_TO_SCORE[points];
    }
}

module.exports = TennisGame;