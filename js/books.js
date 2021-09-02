const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.books))
}

const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    books.forEach(book => {
        console.log(book);
    });
}