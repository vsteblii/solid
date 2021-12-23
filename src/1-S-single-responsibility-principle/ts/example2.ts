class Email {
  public email: string;

  constructor(email: string) {
    if (this.validateEmail(email)) {
      this.email = email;
    } else {
      throw new Error("Invalid email!");
    }
  }

  validateEmail(email: string) {
    // done magic validation
    return true;
  }
}

class Person2 {
  public name: string;
  public surname: string;
  public email: Email;

  constructor(name: string, surname: string, email: Email) {
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
