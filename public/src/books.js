function findAuthorById(authors, id) {
  return authors.find((element)=> element.id === id);
}

function findBookById(books, id) {
  return books.find((element)=> element.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const notOut = books.filter((bookObj) => { 
   const areAllReturned = bookObj.borrows.some((borrowObj) => {
      return borrowObj.returned === false;
    });
    return areAllReturned;
  });

  const checkedOut = books.filter((bookObj) => {
    const isOneCheckedOut = bookObj.borrows.every((borrowObj) => {
      return borrowObj.returned === true;
    });
    return isOneCheckedOut;
  });

  return [notOut,checkedOut]
}


function getBorrowersForBook(book, accounts) {
    const result = [];
    const {borrows} = book;
    borrows.forEach((borrowObject,idx)=>{
        accounts.forEach((accountObject)=>{
            if(borrowObject.id === accountObject.id){
                accountObject.returned = borrowObject.returned
           
                result.push(accountObject);
            }
        })
        
    })

    return result.slice(0,10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
