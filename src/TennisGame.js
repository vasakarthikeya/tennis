var TennisGame = function() {

    var scoreBoard = {
        player1: "0",
        player2: "0"
    };
    var playerOnePoints = 0;

    this.playerOneScored = function () {
        playerOnePoints++;

        if (playerOnePoints === 1) {
            scoreBoard.player1 = "15";
        } else if (playerOnePoints === 2) {
            scoreBoard.player1 = "30"
        }
    }

    this.playerTwoScored = function() {
        scoreBoard.player2 = "15";
    }

    this.getScore = function() {
        return scoreBoard;
    }
}

module.exports = TennisGame;