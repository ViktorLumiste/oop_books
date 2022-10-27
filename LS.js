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
    deleteBookLS(booki){
        let books
        if (localStorage.getItem("books") === null){
            books = []
        } else {
            books = JSON.parse(localStorage.getItem("books"))
        }
        books.splice(booki-1, 1)
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
            let title = book["name"]
            let author = book["author"]
            let ISBN = book["ISBN"]
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

