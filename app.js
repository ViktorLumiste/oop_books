const titleIn = document.querySelector('#title')
const nameIn = document.querySelector('#name')
const ISBNIn = document.querySelector('#ISBN')
const data = document.querySelector('#bookData')
const form = document.querySelector('form')

ui = new UI()
ls = new LS()

data.addEventListener('click', ui.deleteBook)
form.addEventListener('submit', addBook)
document.addEventListener("DOMContentLoaded", ls.getBooksFromLS)
function addBook(e){
    let book = new Book(titleIn.value, nameIn.value, ISBNIn.value)
    ui.addBook(book)
    ls.addBookLS(book)

    titleIn.value = ""
    nameIn.value = ""
    ISBNIn.value = ""
    e.preventDefault()
}
function deleteAllBooks(e){
    ui.deleteBooks()

}


