console.log("hello");

//functions

function Book(title, author, pages, read)
{
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

function addToLib(title, author, pages, read)
{
    const book= new Book(title, author, pages, read);
    myLib.push(book);
    return book;
}

function displayLib(myLib)
{   

    for (let book of myLib)
    { 
        const card=constructCard(book);
        books.appendChild(card);
    }
}

function constructCard(book)
{   //create elements
    const card=document.createElement('div');
    const bookTitle=document.createElement('div');
    const bookAuthor=document.createElement('div');
    const bookPages=document.createElement('div');
    const bookRead=document.createElement('div');
    const authorHead=document.createElement('span');
    const pagesHead=document.createElement('span');
    const authorname=document.createElement('span');
    const pagesname=document.createElement('span');
    const cross=document.createElement('div');
    //add id to card
    card.setAttribute('data-id',bookCount);
    bookCount=bookCount+1;
    //add text
    authorHead.textContent='Author: ';
    pagesHead.textContent='Pages: ';

    bookTitle.textContent=book.title;
    authorname.textContent+=book.author;
    pagesname.textContent+=book.pages;
    bookRead.textContent=(book.read===1)?'read':'unread';

    cross.textContent=' × ';
    
    //connect elements
    bookAuthor.appendChild(authorHead);
    bookPages.appendChild(pagesHead);
    bookAuthor.appendChild(authorname);
    bookPages.appendChild(pagesname);

    card.appendChild(cross);
    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookRead);

    //add classes
    cross.classList.add('cross');

    authorHead.classList.add('detailhead');
    pagesHead.classList.add('detailhead');

    card.classList.add('card');
    bookTitle.classList.add('title');
    bookAuthor.classList.add('detail');
    bookPages.classList.add('detail');
    bookRead.classList.add((book.read==1)?'status':'unstatus');

    return card;
}



function addBook(event)
{
    const formElement=document.querySelector('form');
    const inputs=formElement.querySelectorAll('input');
    console.log(inputs);
    const title=inputs[0].value;
    const author=inputs[1].value;
    const pages=inputs[2].value;
    const read=(inputs[3].checked===true)?1:0;
    console.log(read);
    const book=addToLib(title, author, pages, read);
    addToDisplay(book);
    event.preventDefault();

    function addToDisplay(book)
    {
        const card=constructCard(book);
        books.appendChild(card);
    }
}

function removeBook(tar)
{
    const card=tar.parentElement;
    //remove from display
    books.removeChild(card);
    //remove from array
    const index=myLib.findIndex((book)=>(book.title==card.querySelectorAll('div')[1].textContent));
    myLib.splice(index,1);
    
}
function toggleRead(tar)
{
    const card=tar.parentElement;
    const index=myLib.findIndex((element)=>element.title===card.querySelectorAll('div')[1].textContent);
    const book=myLib[index];
    //toggle in data
    book.read=1-book.read;
    console.log(book.read);
    //toggle in display
    const readStatus=card.lastElementChild;
    readStatus.textContent=(book.read===1)?'read':'unread';
    readStatus.classList.value=(book.read==1)?'status':'unstatus';
}

function checkForCross(event)
{
    tar=event.target;
    if(tar.classList.value==='cross')
    {
        removeBook(tar);
    }
    if(tar.classList.value==='status'||tar.classList.value==='unstatus')
    {
        toggleRead(tar);
    }
    
}

//main
let bookCount=0,deleteCount=0;
const bodyElement=document.querySelector('body');
const books=document.querySelector('.books');
const btn=document.querySelector('.submit');
myLib=[];
addToLib("Harry Potter and the Sorcerer's Stone",'J.K. Rowling',309,1);
addToLib("To Kill a Mockingbird","Harper Lee",281,1);
addToLib("1984","George Orwell",328,0);

displayLib(myLib);

btn.addEventListener('click',addBook);
books.addEventListener('click',checkForCross);

