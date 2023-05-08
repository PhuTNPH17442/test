function countAndListPairs(arr, n) {
    let count = 0;
    const pairs = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (i !== j) {
          pairs.push([arr[i], arr[j]]);
          count++;
        }
      }
    }
    if (n > count) {
      return "N out of range";
    }
    return pairs[n - 1];
  }
  
  
  const arr = [1, 2, 3];
  const n = 2;
  const result = countAndListPairs(arr, n);
  console.log(result); 