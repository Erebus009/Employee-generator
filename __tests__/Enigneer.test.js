const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')



test('Success checks on the employee class', () => {
const e = new Engineer()
expect(typeof(e)).toBe('object')
})