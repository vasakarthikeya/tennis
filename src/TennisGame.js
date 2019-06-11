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

    this.playerOneScored = function () {
        playerOnePoints++;

        setScore(pointsToScore(playerOnePoints), "player1");

        decideWinner();
    }

    this.playerTwoScored = function () {
        playerTwoPoints++;

        setScore(pointsToScore(playerTwoPoints), "player2");

        decideWinner();
    }

    this.getScore = function () {
        return scoreBoard;
    }

    function decideWinner() {
        if (playerOnePoints === 3 && playerOnePoints === playerTwoPoints) {
            scoreBoard.result = "Deuce";
        } else if (playerOnePoints > 3 && playerOnePoints > playerTwoPoints) {
            scoreBoard.result = "Player1 wins.";
        } else if (playerTwoPoints > 3 && playerTwoPoints > playerOnePoints) {
            scoreBoard.result = "Player2 wins.";
        }
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