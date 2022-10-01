// find network endpoint(startnodeid fromids toids) javascript
// https://onecompiler.com/javascript/3x7jafzfg
function findNetworkEndpoint(startNodeId, fromIds, toIds) {
    // Write your code here
    // To debug: console.error('Debug messages...');
    if (fromIds.length === 0) return startNodeId
  if (fromIds.length === 1) return toIds[0]

  let current_node = startNodeId
  let current_index = fromIds.indexOf(current_node)
  let visitednodes = Array(fromIds.length)
    .fill()
    .reduce((acc, cur, index) => {
      acc[index] = false
      return acc
    }, {}) 
  let lastIndexVisited = -1

  while (current_index !== -1) {
    if (visitednodes[current_index]) {
      return fromIds[lastIndexVisited]
    }

    visitednodes[current_index] = true
    lastIndexVisited = current_index
    current_node = toIds[current_index]
    current_index = fromIds.indexOf(current_node)
  }

  return current_node
}



==========================================================================



function computeJoinPoint(s1, s2) {
    // Write your code here
    // To debug: console.error('Debug messages...');
    let s1_join
    let s2_join
    let s1_arr = s1.toString().split('')
    let s1_next = parseInt(s1_arr[0])
    for(let i=1; i<s1_arr.length; i++){
        s1_next = s1_next+parseInt(s1_arr[i])
    }
    let s2_arr = s2.toString().split('')
    let s2_next = parseInt(s2_arr[0])
    for(let i=1; i<s2_arr.length; i++){
        s2_next = s2_next+parseInt(s2_arr[i])
    }
    while(s1_next!==s2_next){
        s1_arr = 
    }
    
    return -1;
}

/* Ignore and do not change the code below */
// #region main
const s1 = parseInt(readline());
const s2 = parseInt(readline());
const oldWrite = process.stdout.write;
process.stdout.write = chunk => { console.error(chunk); return true }
const res = computeJoinPoint(s1, s2);
process.stdout.write = oldWrite;
console.log(res);
// #endregion
