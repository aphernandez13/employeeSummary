// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
// const Intern = require("./lib/Intern");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        console.log(`The intern's school is ${this.school}`);
        return this.school;
    }

    getRole() {
        return ("Intern");
    }
}
module.exports = Intern;

