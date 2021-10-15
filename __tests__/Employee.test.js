const Employee = require('../lib/Employee')



test('Success checks on the employee class', () => {
const employee = new Employee()
expect(typeof(employee)).toBe('object')
})

test('Success check of constructor arguments', () => {
    const name = 'Travis'
    const employee = new Employee(name)
    expect(Employee.name).toBe(name)
})