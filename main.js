// ********************Task 1
class Book {
  title = "Java Script and jQuery";
  author = "John Duckett";
  pages = 640;
  displayInfo() {
    console.log(
      `Название книги ${this.title}, автор ${this.author}, количество страниц ${this.pages}.`
    );
  }
}

const book = new Book();
book.displayInfo();
// *******************Task 2
