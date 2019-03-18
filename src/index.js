/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;
  for (var i=0; i < preferences.length; i++) {
    let firstSpichonee = preferences[i];
    let secondSpichonee = preferences[firstSpichonee-1];
    let thirdSpichonee = preferences[secondSpichonee-1];
    if(firstSpichonee === secondSpichonee || firstSpichonee === thirdSpichonee || secondSpichonee === thirdSpichonee){
      continue;
    }
    if (thirdSpichonee === i+1) {
      count++;
    }
   }
  return (count/3).toFixed(0);
};
