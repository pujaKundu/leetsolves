/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const reshapedArr = [];
    const colLen = mat[0].length;
    const rowLen = mat.length;
    if(r * c !== rowLen * colLen){
        return mat;
    }
    //convert 2D array to 1D array
    const mat1D = [].concat(...mat);
    
    for(let i = 0,k=0;i<r;i++){
        let temp = [];
        for(let j=0;j<c;j++){
            temp.push(mat1D[k]);
            k++;
        }
        reshapedArr.push(temp)
    }
    return reshapedArr;
};