const Employee = require('../lib/Employee')



test('Success checks on the employee class', () => {
const e = new Employee()
expect(typeof(e)).toBe('object')
})

test('Success check of constructor arguments', () => {
    const name = 'Travis'
    const id = '3'
    const email = 'tp@gmail.com'
    const employee = new Employee(name,id,email)
    expect(employee.name).toBe(name)
    expect(employee.id).toBe(id)
    expect(employee.email).toBe(email)
})