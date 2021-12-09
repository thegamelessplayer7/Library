let myLibrary = [];
let book = '';

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

const openForm = document.getElementById('new-book');
openForm.addEventListener('click', () => {
    document.getElementById('entry-form').style.display = 'block';
})

function closeForm() {
    document.getElementById('entry-form').style.display = 'none';
}

const bodyDiv = document.getElementById('body-div');





const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    
    document.getElementById('entry-form').style.display = 'none';

    const title = e.target.title.value;
    const author = e.target.author.value;
    const pages = e.target.pages.value;
    const hasRead = e.target.read.value;

    book = new Book(title, author, pages, hasRead);
    console.log(book.pages);
    myLibrary.push(book);

    let cardDiv = document.createElement('div');
    bodyDiv.appendChild(cardDiv).className = 'card-div';
    let cardInsideDiv = document.createElement('div');
    cardDiv.appendChild(cardInsideDiv).className = 'card-inside-div';
    let titleTag = document.createElement('h2');
    cardInsideDiv.appendChild(titleTag);
    let authorTag = document.createElement('p');
    cardInsideDiv.appendChild(authorTag);
    let pagesTag = document.createElement('p');
    cardInsideDiv.appendChild(pagesTag);
    let hasReadTag = document.createElement('p');
    cardInsideDiv.appendChild(hasReadTag);
    let toggleInfo = document.createElement('p');
    cardInsideDiv.appendChild(toggleInfo);
    toggleInfo.textContent = '(click above to change the read status)';
    toggleInfo.className = 'toggle-info';
    let deleteBtn = document.createElement('button');
    cardInsideDiv.appendChild(deleteBtn);
    deleteBtn.innerHTML = 'Delete';

    deleteBtn.addEventListener('click', () => {
        console.log('delete');
        cardDiv.style.display = 'none';
    })

    function displayCard(array) {
        
        for(let x in array) {
            if(x === 'title') {
                console.log(array[x]);
                titleTag.textContent = (array[x]);
            }
            if (x === 'author') {
                authorTag.textContent = (array[x]);
            }
            if (x === 'pages') {
                pagesTag.textContent = `${(array[x])} pages`;
            }
            if (x === 'hasRead') {
                hasReadTag.textContent = (array[x]);
            }
        }
    }

    hasReadTag.addEventListener('click', () => {
        if(hasReadTag.textContent === 'nah') {
            hasReadTag.textContent = 'sure-did';
        } else if(hasReadTag.textContent === 'sure-did') {
            hasReadTag.textContent = 'nah';
        }
    })
    displayCard(book);
    
})

