function rotate90(matrix) {
    // construct nxn empty square
    var newMatrix = makeSquare(matrix.length);

    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix.length; j++) {
            var last = matrix.length-1
            newMatrix[j][last-i] = matrix[i][j];
        }
    }
    return newMatrix;

}

var makeSquare = (n) =>{
    var arr = [];
    for (var i =0; i < n; i++) {
        var row = [];
        for (var j = 0; j < n; j++) {
            row.push('');
        }
        arr.push(row);
    }
    return arr;
}

var a = [
[1,2,3,4],
[5,6,7,8],
[9,10,11,12],
[13,14,15,16]
]

rotate90(a)
