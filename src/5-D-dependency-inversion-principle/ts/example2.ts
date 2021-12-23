interface Email {
    email: string;
    validateEmail: (email: string) => boolean;
}

class Hotmail2 implements Email {
    public email: string;

    constructor(email: string) {
        if (this.validateEmail(email)) {
            this.email = email;
        } else {
            throw new Error("Invalid email!");
        }
    }

    validateEmail(email: string) {
        // done magic validation that is required just for a hotmail
        return !!email;
    }
}
class Gmail2 implements Email{
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
        return !!email;
    }
}

class Person4 {
    public name: string;
    public surname: string;
    public email: Email;

    constructor(name: string, surname: string, email: Email) {
        // hardcoded dependency
        this.email = email;
        this.name = name;
        this.surname = surname;
    }

    sayHi() {
        alert("Hi!");
    }
}

const gmail2 = new Gmail('gmail.mail');
const hotmail2 = new Hotmail2('gmail.mail');
const gmailPerson = new Person4("Petro", "Solid", gmail2);
const hotmailPerson = new Person4("Serhii", "Solid", hotmail2);
