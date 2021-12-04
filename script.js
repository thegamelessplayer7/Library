let myLibrary = [];
let book;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const getBook = document.getElementById('new-book');
getBook.addEventListener('click', () => {
    document.getElementById('entry-form').style.display='block';
})

function closeForm() {
    document.getElementById('entry-form').style.display='none';
}

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const book = new Book(event.target.title.value, event.target.author.value, event.target.pages.value, event.target.read.value)
    myLibrary.push(book);
})