// Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length. 

// E.g

// chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
// should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]
let givenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function chunkArrayForOf(arrayToChunk, size) {
  let result = [];

  for (let element in arrayToChunk) {
    let lastArray = result[result.length - 1];
    if (!lastArray || lastArray.length == size) {
      result.push([element]);
    } else {
      lastArray.push(element);
    }
  }
  return result;
}

console.log('25_Solution1: chunkArray with for of:', chunkArrayForOf(givenArray, 5));

function chunckArraySplice(arrayToChunk, size) {
  let result = [];
  let arrayCopy = [...arrayToChunk];

  while(arrayCopy.length > 0) {
    result.push(arrayCopy.splice(0, size));
  }
  return result;
}

console.log('25_Solution2: chunkArray with while and splice:', chunckArraySplice(givenArray, 5));

function chunkArraySlice(arrayToChunk, size) {
  let result = [];

  for (let i = 0; i <= arrayToChunk.length; i += size) {
    let chunk = arrayToChunk.slice(i, i + size);
    result.push(chunk);
  }
  return result;
}

console.log('25_Solution3: chunkArray with slice:', chunkArraySlice(givenArray, 5));

function recursiveChunkArray(givenArray, size) {
  if (givenArray.length <= size) {
    return [givenArray];
  }
  return [givenArray.slice(0, size), ...recursiveChunkArray(givenArray.slice(size), size)];
}

console.log('25_Solution4: recursiveChunkArray:', recursiveChunkArray(givenArray, 5));