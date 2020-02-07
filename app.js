/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let leftPointer=0;
  let rightPointer=height.length-1;
  let maxArea=0;

  while( leftPointer < rightPointer ){
    let s = surface(leftPointer, rightPointer, height);
    maxArea = Math.max(maxArea,s);
    if( height[leftPointer] < height[rightPointer] ){
        leftPointer++;
    }else{
        rightPointer--;
    }
  }

  return maxArea;
} ;

function surface(i,j,height){
    return Math.min( height[i], height[j]) * (j-i) ;
}

let height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));

