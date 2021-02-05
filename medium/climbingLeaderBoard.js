function climbingLeaderboard(scores, playerScores) {
  var scoresRanked = [];
  var result = [];

  // find the ranks of the scores
  for (var i = 0; i < scores.length; i++) {
    if (arr[i] === arr[i+1]) {
      result.push(i);
    } else {
      result.push(result[i]+1);
    }
  }

  for (var i = 0; i < playerScores.length; i++) {
    for (var j = scores.length-1; j >= 0; j--) {

    }
  }

}

var getRank = (scores) =>{
  var subArrs = [];
  for (var i = 0; i < scores.length; i++) {
    var same = [];
    while (scores[i] === scores[i+1]) {
      same.push(scores[i]);
    }
    if (same.length !== 0) {
      subArrs.push(same);
    }
    else {
      subArrs.push([scores[i]]);
    }
  }
}