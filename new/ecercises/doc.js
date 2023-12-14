// function max(a,b){
//     if(a>b){
//         return a;
//     }else{
//         return b;
//     }
// }
// console.log(max(5,2));

//Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them
// function maxOfThree(a,b,c){
//        if(a>b&&a>c){
//         return a;
//        }else if(b>a&&b>c){
//         return b;
//        }else{
//         return c;
//        }
// }
// console.log(maxOfThree(2,4,8));
//Write a function isVowel() that takes a character (i.e. a string of length 1)
 //and returns true if it is a vowel, false otherwise

//  function isVowel(chr){
//     if(chr.length===0){
//         alert("give me a char")
//         return;
//     }else if("AEIOUaeiou".includes(chr)){
//         return true;
//     }else
//     return false;
//  }

//  console.log(isVowel('a'));

 //Define a function sum() and a function multiply() that sums and multiplies (respectively) 
 //all the numbers in the
//given array of numbers. For example, sum([1,2,3,4]) should return 10, 
//and multiply([1,2,3,4]) should return 24.
//Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop)

// function sum(num){
//     let summ=0;
//  for(let i=0;i<num.length;i++){
//         summ+=num[i];
//          }
//          return summ;
//        }
 
//        console.log(sum([2,4,8]));

//  function multiply(mult){
//     let k=1;
//    for(let i=0;i<mult.length;i++){
//      k*=mult[i];
//       }
//       return k;
// }
// console.log(multiply[2,4,8]);

//Define a function reverse(str) that computes the reversal of a string. 
//For example, reverse("jag testar") should
//return the string "ratset gaj"

//function reverse(str){
//     let e = " ";
//     for(let i=str.length-1;i>=0;i--){
//       e+=str[i];  
//   }
//   return e;
//    return str.split("").reverse().join("");
// }

// console.log(reverse("Hello"));

//Write a function findLongestWordLength() that takes an array of words and returns the length of the longest
//one
// function findLongestWordLength(words){
//     let maxLen = words[0];
// for(let i=1; i<words.length;i++){
//      if(words[i].length>maxLen.length){
//         maxLen=words[i];
//      }
//     }
//     return maxLen.length;
// }

// console.log(findLongestWordLength(["hi","hello","hey"]));

//Write a function filterLongWords() that takes an array of words and an integer i and returns a new array
//containing only those words that were longer than i characters.

// function filterLongWords(words,e){
//     return words.filter(w=>w.length>e);
//   let arr =[];
//   for(let i=0;i<words.length;i++){
//      if(words[i].length>e){
//         arr+=words[i];
//      }
//   }
//}
//console.log(filterLongWords(["Hello","hi","hey"],2));

// Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and
// returns the sum of the squares of each number in the input array. E.g. computeSumOfSquares([1,2,3]) should be
// computed as 12 + 22 +32 = 14. Note: Write your Javascript code without using Imperative programming. i.e. Do
// NOT use any explicit looping construct; instead use functional programming style/approach.

// function computeSumOfSquares(nums){
//     return nums.map(n=>n*n).reduce((a,b)=>a+b,0);
// }
// console.log(computeSumOfSquares([2,4,8]));

//Write a function named, printOddNumbersOnly, that takes as input, an array of numbers and it finds and prints
//only the numbers which are odd
//  function printOddnumbers(arr){
//      return arr.filter(d=>d%2!==0);
//  }
//  console.log(printOddnumbers([1,2,4,8,7,3]));

 //Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers
//and calculates and returns the sum of the squares of only the even numbers in the input array. E.g.
//computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 22 +42 = 20.
// function computeSumOfSquaresOfEvens(ari){
//     return ari.filter(o=>o%2===0).map(p=>p*p).reduce((c,d)=>c+d,0);
//   }
//   console.log(computeSumOfSquaresOfEvens([1,2,3,4,5]));

 // Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…)
   //(defined in Problem 4
    //above) without using Imperative programming. i.e. 
    //Do NOT use any explicit looping construct; instead use
    //functional programming style/approach.
    
    // function sum(nummm){
    //     return nummm.reduce((e,t)=> e+t,0);
    // }
    // console.log(sum([1,2,3,4]));

    // function multiply(ne){
    //     return ne.reduce((g,r)=>g*r,0)
    // }
    // console.log(multiply([1,2,3,4]));


 //Write a function named printFibo, that takes as input, a given length, n, and 
//  any two starting numbers a and b,
// and it prints-out the Fibonacci sequence, 
// e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with
// a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", 
// as output; printFibo(n=2, a=0, b=1), prints-out: "0, 1", as
// output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", 
// as output; printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2,
// 3, 5", as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).
//  function printFibo(len,e,f){
//     let fibo = [e,f];
//     for(let i=2; i<len;i++){
//         fibo[i]=f[i-1]+ f[i-2];
//     }
//     console.log(fibo.join(','));
//  }
//   printFibo(2,4,3);
 

// let libraryBooks = [
//     { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
//     { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
//     { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
//     { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }];

//     function addBook(author,libraryId){
//         const newBook= {
//             title:title,author:author,libraryID:libraryId
//          }
//             libraryBooks.push(newBook);
//                return newBook;
//         }
//         function getTitles(){
//             let titles;
//             for(let e of libraryBooks){
//                  titles+=e.title   
//             }
//             titles.sort();
//             return titles;
//         }
//         function keyBook(tit){
//             return libraryBooks.filter(x=>x.title.includes(tit)).
//             sort((a,b)=>a.author.localcompare(b.author));
//         }


//         function myMap(arr,fun){
//             const e = [];

//         }





        
    