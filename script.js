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

    //add text
    authorHead.textContent='Author: ';
    pagesHead.textContent='Pages: ';

    bookTitle.textContent=book.title;
    authorname.textContent+=book.author;
    pagesname.textContent+=book.pages;
    bookRead.textContent=(book.read===1)?'read':'unread';
    
    //connect elements
    bookAuthor.appendChild(authorHead);
    bookPages.appendChild(pagesHead);
    bookAuthor.appendChild(authorname);
    bookPages.appendChild(pagesname);

    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookRead);

    //add classes
    authorHead.classList.add('detailhead');
    pagesHead.classList.add('detailhead');

    card.classList.add('card');
    bookTitle.classList.add('title');
    bookAuthor.classList.add('detail');
    bookPages.classList.add('detail');
    bookRead.classList.add('status');

    return card;
}

function addToDisplay(book)
{
    const card=constructCard(book);
    books.appendChild(card);
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
}

//main

const bodyElement=document.querySelector('body');
const books=document.querySelector('.books');
const btn=document.querySelector('.submit');
myLib=[];
addToLib("Harry Potter and the Sorcerer's Stone",'J.K. Rowling',309,1);
addToLib("To Kill a Mockingbird","Harper Lee",281,1);
addToLib("1984","George Orwell",328,0);

displayLib(myLib);

btn.addEventListener('click',addBook);

