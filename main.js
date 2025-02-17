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
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  displayInfo() {
    console.log(`Name:${this.name}\nAge:${this.age}\nGrade:${this.grade}`);
  }
}

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();

const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();
