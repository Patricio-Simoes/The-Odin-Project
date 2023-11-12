//* Show the modal and the new book's form area when the user clicks on the '+' button.
newBookBtnElement.addEventListener('click', showModal);
mobileNewBookBtnElement.addEventListener('click', showModal);
//* Hides the modal when the user clicks on the close button.
modalCloseButtonElement.addEventListener('click', (event) => {
    //! Prevents form submission & page refresh.
    event.preventDefault();
    closeModal();
});
//* Triggered when the user fills the form with a new book entry.
formBtnElement.addEventListener('click', function (event) {
    //! Prevents form submission & page refresh.
    event.preventDefault();
    let bookName = document.getElementById('new-book-name').value;
    let bookReadValue = document.querySelector('input[name="new-book-read"]:checked').value;
    let bookRead = bookReadValue === "true";
    let bookCover = document.getElementById('new-book-cover');
    let bookPages = document.getElementById('new-book-pages').value;

    const file = bookCover.files[0];
    //* In case the user inserted a book cover image.
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const coverUrl = event.target.result;
            registerBook(bookName, coverUrl, bookRead);
        };
        reader.readAsDataURL(file);
    }
    //* In case the user did not insert a cover image.
    else {
        registerBook(bookName, './assets/images/placeholder.png', bookRead, bookPages);
    }
});