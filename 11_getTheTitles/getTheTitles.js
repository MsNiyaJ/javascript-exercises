const getTheTitles = function(books) {
    let bookTitles = [];    //initializing empty array

    //For each book, add the title to bookTitles array
    books.forEach(book => {
        bookTitles.push(book['title']); 
    });
    return bookTitles;
};

module.exports = getTheTitles;
