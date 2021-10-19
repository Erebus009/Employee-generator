const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");


test('Success checks on the employee class', () => {
    const e = new Manager()
    expect(typeof(e)).toBe('object')
    })

    test('Success check of constructor arguments', () => {
        const name = 'Hank'
        const id = '3'
        const officeNumber = '000903'
        const email = "h@gmail.com"
        const employee = new Manager(name,id,email,officeNumber)
        expect(employee.name).toBe(name)
        expect(employee.id).toBe(id)
        expect(employee.officeNumber).toBe(officeNumber)
    })

    test('getRole() should return role of Manager', () => {
  
    const m = new Manager('bob',2,'000908');
    expect(m.getRole()).toBe('Manager');
    })