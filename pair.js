function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function sortAndFilter(arr) {
    arr.sort((a, b) => a - b);
    return arr.filter((num) => isPrime(num));
  }
  
  const arr = [5, 2, 7, 3, 8, 10];
  const sortedAndFilteredArr = sortAndFilter(arr);
  console.log(sortedAndFilteredArr);