class Email {
    email;
    constructor(email) {
        if (this.validateEmail(email)) {
            this.email = email;
        } else {
            throw new Error("Invalid email!");
        }
    }
    validateEmail(email) {
        // done magic validation
        return !!email;
    }
}
class Person2 {
    name;
    surname;
    email;
    constructor(name, surname, email) {
        this.email = email;
        this.name = name;
        this.surname = surname;
    }
    sayHi() {
        alert("Hi!");
    }
}

const email = new Email("verysolid@gmail.com");
const person2 = new Person2("Petro", "Solid", email);
