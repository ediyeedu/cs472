// let libraryBooks = [
//     {
//          title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 
//         },
//               {
//          title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 
//         },
//     { 
//         title: "The Road Ahead", author: "Bill Gates", libraryID: 4268
//      },
//     { 
//         title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257
//      }
// ];  

// function addBook(title,author,libraryId){
//     const newBook = { title, author, libraryId };
//       libraryBooks.push(newBook);
//        return newBook;
//       }
//       function getTitles() {
//         const titlesArray = libraryBooks.map(book => book.title);
//         titlesArray.sort();
//         return titlesArray;
//       }
//       function findBooks(keyword) {
//       const filteredBooks = libraryBooks.filter(book => book.title.includes(keyword));
//       filteredBooks.sort((a, b) => a.author.localeCompare(b.author));
//         return filteredBooks;
//       }
//       function myMap(arr, fun) {
//         if (!Array.isArray(arr) || typeof fun !== 'function') {
//           throw new Error('Invalid input. Please provide an array and a function.');
//         }
//         const resultArray = [];
//       for (let i = 0; i < arr.length; i++) {
//           resultArray.push(fun(arr[i], i, arr));
//         }
//        return resultArray;
//       }
    
// addBook("Radar", "N.R.T. Bennei", 1890);
// addBook("The Big Fish", "Sandra Aman", 4251);
// console.log(getTitles()); 
// console.log(findBooks("The")); 
// console.log(myMap([1, 2, 3], x => x * 2));

    


// const abc = {
//   a: 1,
//   b: 2,
//   add: function() {
//     console.log("1+2 = 3?", this.a + this.b);
//   }
// }
// console.log("regular call to add: ");
// abc.add();
// /* use add inside a timeout */
// console.log("wait 2 seconds to call: ");
// setTimeout(abc.add, 2000);

// let user = {
//   firstName: "John",
//   sayHi() {
//   console.log(this)
//   console.log(`Hello, ${this.firstName}!`);
//   }
//   };
//   user.sayHi(); //works
//   setTimeout(user.sayHi, 2000);
             
//   console.log(str);
//    let str = "hello";
//    console.log(str);


function askPassword(ok, fail) {
  let password = prompt("Password?", '');

  if (password == "rockstar") ok();
  else fail();  
}

let user = {
  name: 'John',

  loginOk() {
    alert(${this.name} logged in); 
  },

  loginFail() {
    alert(${this.name} failed to log in);
  }
};

askPassword.call(user, user.loginOk, user.loginFail);


