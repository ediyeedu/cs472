// Define using array prototype
Array.prototype.evens = function () {
    return this.filter((num) => num % 2 === 0);
  };
  
  Array.prototype.odds = function () {
    return this.filter((num) => num % 2 !== 0);
  };
  
 
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(testArray.evens()); 
  console.log(testArray.odds());  