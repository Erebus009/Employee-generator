const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')



test('Success checks on the employee class', () => {
const e = new Engineer()
expect(typeof(e)).toBe('object')
})

test('Success check of constructor arguments', () => {
    const name = 'Travis'
    const id = '3'
    const github = 'tp@gmail.com'
    const employee = new Engineer(name,id,github)
    expect(employee.name).toBe(name)
    expect(employee.id).toBe(id)
    expect(employee.email).toBe(github)
})

test('getRole() should return role of Manager', () => {
  
    const e = new Engineer('bob',2,'github');
    expect(e.getRole()).toBe('Engineer');
    })