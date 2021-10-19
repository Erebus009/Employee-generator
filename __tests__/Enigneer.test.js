const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')



test('Success checks on the employee class', () => {
const e = new Engineer()
expect(typeof(e)).toBe('object')
})

test('Success check of constructor arguments', () => {
    const name = 'Travis'
    const id = '3'
    const email = 'tp@gmail.com'
    const github = 'loch ness'
    const employee = new Engineer(name,id,email,github)
    expect(employee.name).toBe(name)
    expect(employee.id).toBe(id)
    expect(employee.github).toBe(github)
    expect(employee.email).toBe(email)
})

test('getRole() should return role of Engineer', () => {
  
    const e = new Engineer('bob',2,'github');
    expect(e.getRole()).toBe('Engineer');
    })