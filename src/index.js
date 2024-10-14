
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let sortArr = [];
    if (!matrix || matrix.length == 0) return [];
    
    matrix.forEach((element, index) => {
      
      if (index % 2 === 0) {
        sortArr.push(...element)
      }
      else {       
        sortArr.push(...element.slice().reverse());
      }
    });

  return sortArr;
}
