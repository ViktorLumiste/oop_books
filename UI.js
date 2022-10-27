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
    deleteBook(e) {
        let curBooki
        if (e.target.textContent === "X") {
            if (confirm("are you sure you want to remove this book?")) {
                curBooki = e.target.parentElement.parentElement.rowIndex
                data.deleteRow(curBooki)
                ls.deleteBookLS(curBooki)
            }
        }
    }
    deleteBooks(e){
        let rows = data.rows.length -1
        for( let i = rows; i > 0;i--){
            data.deleteRow(1)
            ls.deleteBookLS(1)
        }
    }
}

