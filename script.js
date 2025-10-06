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
        bookTitle.textContent=book.title;
        bookAuthor.textContent=book.author;
        bookPages.textContent=book.pages;
        bookRead.textContent=book.read;
        card.appendChild(bookTitle);
        card.appendChild(bookAuthor);
        card.appendChild(bookPages);
        card.appendChild(bookRead);
    }

}

//main

const bodyElement=document.querySelector('body');

myLib=[];
addToLib("b1",'a1',1,1);
addToLib("b2","a2",1,1);
addToLib("b3","a3",1,1);

display(myLib);
