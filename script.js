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
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    
    document.getElementById('entry-form').style.display = 'none';

    const title = event.target.title.value;
    const author = event.target.author.value;
    const pages = event.target.pages.value;
    const hasRead = event.target.read.value;


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
    
    
    const readStatus = document.createElement('button');
    cardInsideDiv.appendChild(readStatus);
    readStatus.className = 'read-status';
    readStatus.innerHTML = 'Read Status';

    const deleteBtn = document.createElement('button');
    cardInsideDiv.appendChild(deleteBtn);
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = 'Delete';

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
                hasReadTag.textContent = `Read it? ${(array[x])}`;
            }
        }
    }

  
    const toggleReadStatus = () => {
        for (let i = 0; i < myLibrary.length; i++) {
            if(myLibrary[i].hasRead === 'sure did') {
                myLibrary[i].hasRead = 'nah';
            } else if (myLibrary[i].hasRead === 'nah') {
                myLibrary[i].hasRead = 'sure did';
            }
            hasReadTag.textContent = myLibrary[i].hasRead;
        }
    }

    
    readStatus.addEventListener('click', toggleReadStatus);

    displayCard(book);
    document.getElementById('form-container').reset();
    
})

