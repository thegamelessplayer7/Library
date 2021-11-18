let myLibrary = [];

function Book() {

}

function addBookToLibrary() {
    let newBook = prompt('Add a new book to the library!');
    myLibrary.push(newBook);
}

const newBookBtn = document.getElementById('new-book');
newBookBtn.addEventListener('click', addBookToLibrary);

const insideArray = function() {
    myLibrary.forEach(function(item) {
        document.getElementById('my-books').textContent += ` ${item}`;
    })
};

const allMyBooks = document.getElementById('inside-array');
allMyBooks.addEventListener('click', insideArray);