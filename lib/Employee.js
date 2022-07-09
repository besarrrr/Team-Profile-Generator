class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    
    }

    getName(){
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail(){
        return `This is the employee's email: ${this.email}`
    }
    
    getRole() { //returns 'Employee'
        return 'Employee'
    }
    
}

module.exports = Employee;