
//NTN: All fields display, if simple. Need formatting on cards next, error cases for all fields. Get info method to work on div co  ntent??

const adderBtn = document.querySelector('#adder');
const gridCon = document.querySelector('.grid-container');

let addTitle;
let addAuth;
let addPages;
let addRead;

let bookGrid;
let testTitle;

let titleText = document.querySelector('#bookTitle');
let bookAuth = document.querySelector('#bookAuth');
let pages = document.querySelector('#pages');
let check = document.querySelector('#check');







function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;


    this.info = function () {
        let ifRead = "";
        if (read === true) {
            read = "read";
        }

        else {
            read = "not read";
        }
        let bookInfo = title + " by " + author + ", " + pages + " pages, " + ifRead;
        return bookInfo
    }
}


const mistborn = new Book("Mistborn", "Brandon Sanderson", 800, true);

let myLibrary = [mistborn,];

const eastEden = new Book("East of Eden", "John Steinbeck", 600, true);
const harryP = new Book("Harry Potter", "Transphobe", 500, true);

let divCount = -1;

function displayBooks() {
    let len = myLibrary.length;
    
    for (i=0; i<len;i++){
        let bookNum = "book" + [i];
        

        if (divCount < i) {

        
        bookGrid = document.createElement('div');
        bookGrid.classList.add(bookNum);
        bookGrid.classList.add('style');
        bookGrid.textContent = "Title: " + myLibrary[i].title + " Author: " + myLibrary[i].author + " Pages: " + myLibrary[i].pages + " Read: " + myLibrary[i].read;


        gridCon.appendChild(bookGrid);

        console.log(myLibrary[i]);
        divCount++;
        } 
        else if (divCount > i) {
            i++;
        }
    }

        
        
    }



adderBtn.addEventListener('click', () => {


    addTitle = titleText.value;
    addAuth = bookAuth.value;
    addPages = pages.value;
    addRead = check.checked;

    if (addTitle === "") {
        titleText.classList.add("error");
        return myLibrary;
    }

    else {

        if (addTitle != "") {
            titleText.classList.remove("error");
        }
    const newBook = new Book(addTitle, addAuth, addPages, addRead);
    myLibrary.push(newBook);
    displayBooks();
    titleText.value = "";
    bookAuth.value = "";
    pages.value = "";
    return myLibrary;
    }

});

displayBooks();