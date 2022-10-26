class LS {
    addBookLS(book){
        let books
        if (localStorage.getItem("books") === null){
            books = []
        } else {
            books = JSON.parse(localStorage.getItem("books"))
        }
        books.push(book)
        localStorage.setItem("books", JSON.stringify(books))
    }
    deleteBookLS(book){
        let books
        if (localStorage.getItem("books") === null){
            books = []
        } else {
            books = JSON.parse(localStorage.getItem("books"))
        }
        books.forEach((bookLS, bookIndex) => {
            const sbookLS = JSON.stringify(bookLS)
            const sbook = JSON.stringify(book)
            if(sbookLS === sbook){
                books.splice(bookIndex, 1)
            }
        })
        localStorage.setItem('books', JSON.stringify(books))
    }
    getBooksFromLS(){
        let books
        if (localStorage.getItem("books") === null){
            books = []
        } else {
            books = JSON.parse(localStorage.getItem("books"))
        }
        books.forEach((book, bookIndex) => {
            let title = book[0]
            let author = book[1]
            let ISBN = book[2]
            const row = data.insertRow(bookIndex+1)
            const cell1 = row.insertCell(0)
            const cell2 = row.insertCell(1)
            const cell3 = row.insertCell(2)
            const cell4 = row.insertCell(3)
            const cross = document.createElement('a')
            cross.appendChild(document.createTextNode('X'))
            cross.className = 'blue-text text-darken-2 secondary-content'
            cross.setAttribute('href', '#')
            cell1.innerHTML = title
            cell2.innerHTML = author
            cell3.innerHTML = ISBN
            cell4.appendChild(cross)
        })
    }
}

