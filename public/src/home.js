const { findAuthorById } = require("./books");

function getTotalBooksCount(books=[]){
 return books.length
}

function getTotalAccountsCount(accounts) {
  const numberOfAccounts = accounts.reduce((account) => {
    account = accounts.map((account) => account);
    return account.length;
  }, 0);
  return numberOfAccounts;
}

function getBooksBorrowedCount(books) {
  let result =0;
  books.forEach((bookObj)=> {if(bookObj.borrows[0].returned == false)
  { result ++
   }});
 
 return result;
}

function getMostCommonGenres(books=[]) {
const result =[];
const {genre} =books;
const countObj = {}
  books.forEach((bookObj)=>{
    if(countObj[bookObj.genre] === undefined){
      countObj[bookObj.genre] = 1
    }else{
      countObj[bookObj.genre] += 1
    }
  })

  for(let genreKey in countObj){
    let mostCommon = {name: genreKey, count: countObj[genreKey]}
    result.push(mostCommon)
  }
  
  result.sort((elementA, elementB)=>{
    return elementB.count - elementA.count
  })

return result.slice(0,5);
}

function getMostPopularBooks(books=[]) {
  books.sort((bookA, bookB)=>{
    return bookB.borrows.length - bookA.borrows.length
  })
  const mostPopBooks = books.slice(0,5)

  const result = mostPopBooks.map((bookObj)=>{
    return {
      name: bookObj.title,
      count: bookObj.borrows.length
    }
  })

  return result;
}
function helperJoinFirstAndLastNames(author) {
  return `${author.name.first} ${author.name.last}`;
}

function getMostPopularAuthors(books, authors) {
  books.sort((bookA, bookB)=>{
    return bookB.borrows.length - bookA.borrows.length
  })

  const result = []
  books.forEach((bookObj)=>{
    const author = findAuthorById(authors, bookObj.authorId)
    const popAuth = {name: helperJoinFirstAndLastNames(author), count: bookObj.borrows.length}
    result.push(popAuth)
  })

  return result.slice(0,5);

}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

