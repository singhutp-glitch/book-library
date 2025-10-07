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
}

function display(myLib)
{   

    for (let book of myLib)
    { 
        const card=document.createElement('div');
        const bookTitle=document.createElement('div');
        const bookAuthor=document.createElement('div');
        const bookPages=document.createElement('div');
        const bookRead=document.createElement('div');
        const authorHead=document.createElement('span');
        const pagesHead=document.createElement('span');
        const authorname=document.createElement('span');
        const pagesname=document.createElement('span');

        authorHead.textContent='Author: ';
        pagesHead.textContent='Pages: ';

        bookAuthor.appendChild(authorHead);
        bookPages.appendChild(pagesHead);

        bookAuthor.appendChild(authorname);
        bookPages.appendChild(pagesname);

        authorHead.classList.add('detailhead');
        pagesHead.classList.add('detailhead');

        bookTitle.textContent=book.title;
        authorname.textContent+=book.author;
        pagesname.textContent+=book.pages;
        bookRead.textContent=(book.read===1)?'read':'unread';
        card.appendChild(bookTitle);
        card.appendChild(bookAuthor);
        card.appendChild(bookPages);
        card.appendChild(bookRead);

        card.classList.add('card');
        bookTitle.classList.add('title');
        bookAuthor.classList.add('detail');
        bookPages.classList.add('detail');
        bookRead.classList.add('status');
       
        books.appendChild(card);
    }

}

//main

const bodyElement=document.querySelector('body');
const books=document.querySelector('.books');

myLib=[];
addToLib("book1",'author1',1,1);
addToLib("book2","author2",1,1);
addToLib("book3","author3",1,1);

display(myLib);
