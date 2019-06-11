var TennisGame = function () {

    var scoreBoard = {
        player1: "0",
        player2: "0",
        result: ""
    };
    var playerOnePoints = 0;
    var playerTwoPoints = 0;
    var DEUCE_POINT = 3;
    var ADVANTAGE_POINT = 4;
    var POINTS_TO_SCORE = {
        1: "15",
        2: "30",
        3: "40"
    };
    var RESULTS = {
        DEUCE: "Deuce",
        PLAYER_ONE_WINS : "Player1 wins.",
        PLAYER_TWO_WINS : "Player2 wins.",
        PLAYER_ONE_ADVANTAGE: "Player1 gets advantage",
        PLAYER_TWO_ADVANTAGE: "Player2 gets advantage",
    };
    var deuceGame = false;
    var advantagePlayer;

    this.playerOneScored = function () {
        increasePlayerOnePoints();

        setScore(pointsToScore(playerOnePoints), "player1");
        setAdvantagePlayer("player1");

        decideWinner();
    }

    this.playerTwoScored = function () {
        increasePlayerTwoPoints();

        setScore(pointsToScore(playerTwoPoints), "player2");
        setAdvantagePlayer("player2");

        decideWinner();
    }

    this.getScore = function () {
        return scoreBoard;
    }

    function decideWinner() {
        if (!isDeuceGame()) {
            if (isDeucePoints()) {

                setThisGameAsDeuce();
                setResultAsDeuce();
            } else if (isPlayerWinGame(playerOnePoints, playerTwoPoints)) {
                setResultAsPlayerOneWin();
            } else if (isPlayerWinGame(playerTwoPoints, playerOnePoints)) {
                setResultAsPlayerTwoWin();
            }
        } else {
            if(isBothPlayersInAdvantage()) {
                setPointsBackToDeuce();
                setResultAsDeuce();
                setAdvantagePlayerAsEmpty();
            } else if(advantagePlayer === "player1") {
                setResultAsPlayerOneAdvantage();
            } else if(advantagePlayer === "player2") {
                setResultAsPlayerTwoAdvantage();
            }
        }
    }

    function increasePlayerOnePoints() {
        playerOnePoints++;
    }
    
    function increasePlayerTwoPoints() {
        playerTwoPoints++;
    }

    function isPlayerWinGame(point1, point2) {
        return point1 > DEUCE_POINT && point1 > point2;
    }

    function setAdvantagePlayer(player) {
        if(isDeuceGame()) {
            advantagePlayer = player;
        }
    }
    
    function setAdvantagePlayerAsEmpty() {
        advantagePlayer = "";
    }

    function setResult(value) {
        scoreBoard.result = value;
    }
    
    function setResultAsPlayerOneWin() {
        setResult(RESULTS.PLAYER_ONE_WINS);
    }

    function setResultAsPlayerTwoWin() {
        setResult(RESULTS.PLAYER_TWO_WINS);
    }

    function setResultAsDeuce() {
        setResult(RESULTS.DEUCE);
    }

    function setResultAsPlayerOneAdvantage() {
        setResult(RESULTS.PLAYER_ONE_ADVANTAGE);
    }

    function setResultAsPlayerTwoAdvantage() {
        setResult(RESULTS.PLAYER_TWO_ADVANTAGE);
    }

    function isBothPlayersInAdvantage() {
        return isPointsAreEqual(ADVANTAGE_POINT);
    }

    function setPointsBackToDeuce() {
        playerOnePoints--;
        playerTwoPoints--;
    }

    function isDeuceGame() {
        return deuceGame;
    }

    function isDeucePoints() {
        return isPointsAreEqual(DEUCE_POINT);
    }

    function isPointsAreEqual(pointsToCheck) {
        return (playerOnePoints === pointsToCheck && playerOnePoints === playerTwoPoints);
    }

    function setThisGameAsDeuce() {
        deuceGame = true;
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