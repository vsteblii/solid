class Gmail {
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

class Person3 {
    public name: string;
    public surname: string;
    public email: Gmail;

    constructor(name: string, surname: string, email: string) {
        // hardcoded dependency
        this.email = new Gmail(email);
        this.name = name;
        this.surname = surname;
    }

    sayHi() {
        alert("Hi!");
    }
}

const person3 = new Person3("Petro", "Solid", 'testemail');
