// Single responsibility principle: Every class should have only one responsibility
// 1 Example:
class Person1 {
    name;
    surname;
    email;
    constructor(name, surname, email) {
        this.surname = surname;
        this.name = name;
        this.email = email;
    }
    // Problem: Person know how to validate email
    validateEmail(email) {
        // done magic validation
        return !!email;
    }
    sayHi() {
        alert("Hi!");
    }
}
const person1 = new Person1("Petro", "Solid", "verysolid@gmail.com");
