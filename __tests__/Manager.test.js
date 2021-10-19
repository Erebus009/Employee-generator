const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");


test('Success checks on the employee class', () => {
    const e = new Manager()
    expect(typeof(e)).toBe('object')
    })

    test('Success check of constructor arguments', () => {
        const name = 'Travis'
        const id = '3'
        const officeNumber = 'tp@gmail.com'
        const employee = new Manager(name,id,officeNumber)
        expect(employee.name).toBe(name)
        expect(employee.id).toBe(id)
        expect(employee.email).toBe(officeNumber)
    })

    test('getRole() should return role of Manager', () => {
  
    const m = new Manager('bob',2,'000908');
    expect(m.getRole()).toBe('Manager');
    })