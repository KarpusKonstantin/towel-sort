
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
    let outResult = [];

    if (!matrix) { return []}

    for (let i = 0; i < matrix.length; i++) {
        if (((i+1) === 0) || (((i+1) % 2 !== 0))) {
            result.push(matrix[i].sort((a,b) => {return a-b}))
        } else if ((i+1) % 2 === 0) {
            result.push(matrix[i].sort((a,b) => {return b-a}))
        }
    }

    //console.log('RESULT = ', result);

    for (let i = 0; i < result.length; i++ ) {
        for (let j = 0; j < result[i].length; j++) {
            outResult.push(result[i][j]);
        }
    }


  return outResult;
}
