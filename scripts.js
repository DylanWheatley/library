const adderBtn = document.querySelector('#adder');
const gridCon = document.querySelector('.grid-container');
let addTitle;
let bookGrid;
let testTitle;
let titleText = document.querySelector('#bookTitle');





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

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 1000, false);
const mistborn = new Book("Mistborn", "Brandon Sanderson", 800, true);

let myLibrary = [theHobbit, mistborn,];

const eastEden = new Book("East of Eden", "John Steinbeck", 600, true);
const harryP = new Book("Harry Potter", "Transphobe", 500, true);
myLibrary[2] = eastEden;
let divCount = -1;

function displayBooks() {
    let len = myLibrary.length;
    
    for (i=0; i<len;i++){
        let bookNum = "book" + [i];
        

        if (divCount < i) {

        
        bookGrid = document.createElement('div');
        bookGrid.classList.add(bookNum);
        bookGrid.classList.add('style');
        bookGrid.textContent = myLibrary[i].title;


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

    if (addTitle === "") {
        titleText.classList.add("error");
        return myLibrary;
    }

    else {

    titleText.classList.remove("error");
    const newBook = new Book(addTitle, "Name", 1, true);
    myLibrary.push(newBook);
    displayBooks();
    titleText.value = "";
    return myLibrary;
    }

});

displayBooks();