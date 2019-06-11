var TennisGame = function() {

    var scoreBoard = {
        player1: "0",
        player2: "0"
    };
    var playerOnePoints = 0;
    var playerTwoPoints = 0;

    this.playerOneScored = function () {
        playerOnePoints++;

        if (playerOnePoints === 1) {
            scoreBoard.player1 = "15";
        } else if (playerOnePoints === 2) {
            scoreBoard.player1 = "30"
        }
    }

    this.playerTwoScored = function() {
        playerTwoPoints++;

        if (playerTwoPoints === 1) {
            scoreBoard.player2 = "15";
        } else if (playerTwoPoints === 2) {
            scoreBoard.player2 = "30"
        }
    }

    this.getScore = function() {
        return scoreBoard;
    }
}

module.exports = TennisGame;