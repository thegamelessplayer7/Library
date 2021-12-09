let myLibrary = [];

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

    let book = new Book(title, author, pages, hasRead);
    myLibrary.push(book);

    const cardDiv = document.createElement('div');
    bodyDiv.appendChild(cardDiv).className = 'card-div';
    const cardInsideDiv = document.createElement('div');
    cardDiv.appendChild(cardInsideDiv).className = 'card-inside-div';
    const titleTag = document.createElement('h2');
    cardInsideDiv.appendChild(titleTag);
    const authorTag = document.createElement('p');
    cardInsideDiv.appendChild(authorTag);
    const pagesTag = document.createElement('p');
    cardInsideDiv.appendChild(pagesTag);
    const hasReadTag = document.createElement('p');
    cardInsideDiv.appendChild(hasReadTag);

    const deleteBtn = document.createElement('button');
    cardInsideDiv.appendChild(deleteBtn);
    deleteBtn.innerHTML = 'Delete';
    const readStatus = document.createElement('button');
    cardInsideDiv.appendChild(readStatus);
    readStatus.innerHTML = 'Change Read Status';

  

    deleteBtn.addEventListener('click', () => {
        cardDiv.style.display = 'none';
    })

    function displayCard(array) {
        
        for(let x in array) {
            if(x === 'title') {
                titleTag.textContent = (array[x]);
            }
            else if (x === 'author') {
                authorTag.textContent = (array[x]);
            }
            else if (x === 'pages') {
                pagesTag.textContent = `${(array[x])} pages`;
            }
            else if (x === 'hasRead') {
                hasReadTag.textContent = (array[x]);
            }
        }
    }

    readStatus.addEventListener('click', () => {
        if(hasReadTag.textContent === 'nah') {
            hasReadTag.textContent = 'sure-did';
        } else if(hasReadTag.textContent === 'sure-did') {
            hasReadTag.textContent = 'nah';
        }
    })
    displayCard(book);
    
})

