//* The CSS Grid containing all the books.
const booksElement = document.getElementById('books');
//* The buttons in charge of showiing the modal, (both the hamburger button and the normal button).
const newBookBtnElement = document.querySelector('.new-book');
const mobileNewBookBtnElement = document.querySelector('.menu-item button');
//* The modal and it's elements.
const modalElement = document.getElementById('modal');
const modalCloseButtonElement = document.getElementById('close-modal');
let form = document.querySelector('#modal form');
//* The form submission button.
const formBtnElement = document.getElementById('submit');
//* The JS book counter variables.
let totalBooks = 0;
let totalBooksRead = 0;
let totalBooksNotRead = 0
//* The CSS labels that display the number of books in the library.
const booksCountElement = document.getElementById('books-count');
const booksReadCountElement = document.getElementById('books-read-count');
const booksNotReadCountElement = document.getElementById('books-not-read-count');