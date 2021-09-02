const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data));
    
}

const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    const totalResult = document.getElementById('total-result');
    const books = data.docs;
    searchResult.textContent = '';
    books.forEach(book => {
        console.log(book);
        
        if(data.numFound === 0){
            totalResult.innerHTML = `<h3>No Result Found</h3>`;
        }
        else{
            totalResult.innerHTML = `<h3>Total Books Found: ${data.numFound}</h3>`;
        }
        
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Book Name: ${book.title?book.title:'Not Available'}</h5>
                <h6 class="card-title">Author Name: ${book.author_name?book.author_name:'Not Available'}</h6>
                <p class="card-text">First Published: ${book.first_publish_year?book.first_publish_year:'Not Available'}</p>
                <p class="card-text">Publisher: ${book.publisher?book.publisher:'Not Available'}</p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}

// const totalResult = total => {
//     console.log(total);
//     const totalResult = document.getElementById('total-result');
//     totalResult.innerText = 'Total Results: ' + total.numFound;
    
// }