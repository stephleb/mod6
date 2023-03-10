const { findAuthorById } = require("./books");

function findAccountById(accounts=[], id="") {
  return accounts.find((element)=> element.id === id);
}

function sortAccountsByLastName(accounts=[]) {
  return accounts.sort((elementA, elementB)=> {
  return elementA.name.last.toLowerCase() < elementB.name.last.toLowerCase() ? -1 : 1;});
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
let total = 0;
books.forEach((bookObj)=>{
  bookObj.borrows.forEach((borrowObj)=>{
    if(borrowObj.id === account.id){ total++}}
  )});
  return total
}

function getBooksPossessedByAccount(account={}, books=[], authors=[]) {
 let result = [];
 books.forEach((bookObj)=>{
    if( bookObj.borrows[0].id == account.id && bookObj.borrows[0].returned == false){
      const bookAuthor = findAuthorById(authors, bookObj.authorId)
      bookObj.author = bookAuthor;
      result.push(bookObj)}
  })

return result;
    }


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

