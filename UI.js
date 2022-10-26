class UI {
    constructor(){
        this.data = document.querySelector('#bookData')
        this. form = document.querySelector('form')
    }
    addBook(book) {
        const row = data.insertRow(-1)
        const cell1 = row.insertCell(0)
        const cell2 = row.insertCell(1)
        const cell3 = row.insertCell(2)
        const cell4 = row.insertCell(3)
        const cross = document.createElement('a')
        cross.appendChild(document.createTextNode('X'))
        cross.className = 'blue-text text-darken-2 secondary-content'
        cross.setAttribute('href', '#')
        cell1.innerHTML = book.name
        cell2.innerHTML = book.author
        cell3.innerHTML = book.ISBN
        cell4.appendChild(cross)
        const toLSData = [book.title, book.name, book.ISBN]
        // addBookLS(toLSData)

    }
    deleteBook(e){
        let curBooki
        let name = e.target.parentElement.parentElement.children[0].innerText
        let author = e.target.parentElement.parentElement.children[1].innerText
        let ISBN = e.target.parentElement.parentElement.children[2].innerText
        let curBook = [name,author,ISBN]
        if (e.target.textContent === "X") {
            if (confirm("are you sure you want to remove this book?")) {
                curBooki = e.target.parentElement.parentElement.rowIndex
                data.deleteRow(curBooki)
                // deleteBookLS(curBook)
            }
        }

    }
}

