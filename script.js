let myLibrary = [];
let book = '';

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
form.addEventListener('submit', (e) => {
    e.preventDefault();
    book = new Book(e.target.title.value, e.target.author.value, e.target.pages.value, e.target.read.value)
    myLibrary.push(book);
    displayCard(myLibrary);
    document.getElementById('entry-form').style.display='none';
    //myLibrary = [];
})

const bodyDiv = document.getElementsByClassName('body-div');
const para = document.getElementById('my-books')
function displayCard(array) {
    for(i = 0; i < array.length; i++) {
        // for each array value, we want to loop through
        //the object key of the array, to determine what
        //type of value it is, so that I can designate
        //what HTML tag to give it (h2, p, etc)
        for (let x in array[i]) {
        //para.textContent += array[i][x];
        //console.log(array[i]);
        //console.log(array[i][x])
            if(x === 'title') {
                console.log(array[i][x]);
            }
        }
    }
}

// Create card and append it to bodyDiv element
