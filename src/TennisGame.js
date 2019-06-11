var TennisGame = function() {

    var scoreBoard = {
        player1: "0",
        player2: "0"
    };
    var playerOnePoints = 0;
    var playerTwoPoints = 0;
    var POINTS_TO_SCORE = {
        1: "15",
        2: "30"
    };

    this.playerOneScored = function () {
        playerOnePoints++;

        scoreBoard.player1 = POINTS_TO_SCORE[playerOnePoints];
    }

    this.playerTwoScored = function() {
        playerTwoPoints++;

        scoreBoard.player2 = POINTS_TO_SCORE[playerTwoPoints];
    }

    this.getScore = function() {
        return scoreBoard;
    }
}

module.exports = TennisGame;