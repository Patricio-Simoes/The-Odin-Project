const lotrBook = new Book('The Lord Of The Rings', './assets/images/lotr-cover.jpg', true, '1178');
const witcherBook = new Book('The Last Wish', './assets/images/the-witcher-cover.jpg', false, '336');
let bookList = [lotrBook, witcherBook];

displayBooks();

//? This function hides the modal and it's form.
function showModal() {
    modalElement.style.visibility = 'visible';
    modalElement.style.display = 'flex';
    hideMenu();
}

//? This function hides the modal and it's form.
function closeModal() {
    form.reset();
    modalElement.style.visibility = 'hidden';
    modalElement.style.display = 'none';
}

//? This function is called inside the displayBooks() function and it's purpose is to insert the new book
//? into the CSS Grid.
function addBookToGrid(book) {
    const newBook = document.createElement('article');
    newBook.classList.add('book');

    const newBookTitleElement = document.createElement('p');
    newBookTitleElement.textContent = book.title;
    newBookTitleElement.classList.add('book-title');
    const newBookCoverElement = document.createElement('img');
    newBookCoverElement.src = book.cover;
    newBookCoverElement.alt = book.title + ' Book Cover';
    newBookCoverElement.classList.add('book-cover');
    const newBookReadElement = document.createElement('button');
    newBookReadElement.classList.add('book-status');
    newBookReadElement.addEventListener('click', () =>{
        changeStatus(book);
    });
    if (book.read) {
        newBookReadElement.innerHTML = 'Status: <span style="color: green;">Read</span>';
    }
    else {
        newBookReadElement.innerHTML = 'Status: <span style="color: red;">Not Read</span>';
    }

    const newBookPagesElement = document.createElement('p');
    newBookPagesElement.textContent = 'Page Number: ' + book.pages;
    newBookPagesElement.classList.add('book-pages');

    const newBookDetailsElement = document.createElement('div');
    newBookDetailsElement.classList.add('book-details');
    newBookDetailsElement.appendChild(newBookTitleElement);
    newBookDetailsElement.appendChild(newBookCoverElement);
    newBookDetailsElement.appendChild(newBookReadElement);
    newBookDetailsElement.appendChild(newBookPagesElement);

    const newBookCloseBtnElement = document.createElement('button');
    newBookCloseBtnElement.classList.add('remove');
    const closeButtonImg = document.createElement('img');
    closeButtonImg.src = './assets/images/rejected.png';
    closeButtonImg.alt = 'Close-btn';
    newBookCloseBtnElement.appendChild(closeButtonImg);

    newBook.appendChild(newBookCloseBtnElement);
    newBook.appendChild(newBookDetailsElement);

    const booksElement = document.getElementById('books');
    booksElement.insertBefore(newBook, newBookBtnElement);
}

//? This function loops through the 'bookList' array and for each item, displays
//? the book's info on the Grid.
//? It also adds the ability to remove books from the Grid while updating the
//? necessary JS vasriables.
function displayBooks(newBook = undefined) {
    //* This loops through the JS array and for each item, it adds it to the CSS Grid.
    bookList.forEach((book) =>
        addBookToGrid(book)
    );

    //* This next part is in charge of removing books from the grid and updating the JS variables.
    let gridItems = Array.from(booksElement.children);
    //* Loops through every book.
    //* The last elements is the add book element, so we do not need that here.
    for (let index = 0; index < gridItems.length - 1; index++) {
        let gridItem = gridItems[index];
        let deleteButton = gridItem.querySelector('.remove');
        deleteButton.addEventListener('click', (function (index) {
            return function () {
                //* Removes the book element from the CSS grid.
                gridItem.remove();
                //* Removes the book from the JS array.
                bookList.splice(index, 1);
                //* Refreshes the GridItems and the Griditems.length.
                clearGrid();
                displayBooks();
                //* Updates the books count labels when a book is deleted.
                updateBooksCount();
            };
        })(index));
    }
    //* Updates the books count labels when a new book is displayed.
    updateBooksCount();
}

//? This function is triggered when the user fills the form and it's purpose is
//? to add the book entry to the bookList array and update the CSS Grid display items.
//? It also clears the input fields when the form is filled in order to allow for a new
//? book entry.
function registerBook(name, cover = undefined, read, pages) {
    let newBook = new Book(name, cover, read, pages);

    bookList.push(newBook);

    form.reset();

    clearGrid();
    displayBooks(newBook);
}

//? This function updates the books count displayed on the HTML elements
//? to match the JS variables.
function updateBooksCount() {
    totalBooks = 0;
    totalBooksRead = 0;
    totalBooksNotRead = 0;
    //* Updates the JS counter variables.
    bookList.forEach((book) => {
        totalBooks++
        if (book.read)
            totalBooksRead++;
        else
            totalBooksNotRead++;
    })
    //* Updates the CSS elements.
    booksCountElement.textContent = totalBooks;
    booksReadCountElement.textContent = totalBooksRead;
    booksNotReadCountElement.textContent = totalBooksNotRead;
}

//? This function removes every existing book from the Grid.
function clearGrid() {
    const booksElement = document.getElementById('books');
    const gridItems = Array.from(booksElement.children);

    for (let index = 0; index < gridItems.length - 1; index++) {
        const gridItem = gridItems[index];
        gridItem.remove();
    }
}

//? This function is in charge of changing the read status of a book and updating the CSS Grid.
function changeStatus(book){
    if(book.read)
        book.read = false;
    else
        book.read = true;
    clearGrid();
    displayBooks();
}