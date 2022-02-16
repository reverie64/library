function Books(title, author, pages, complete){
    this.title = title
    this.author = author
    this.pages = pages
    this.complete = complete
    this.info = function() {
       return title, author, pages, complete
    }
    console.log(Books.info());
}