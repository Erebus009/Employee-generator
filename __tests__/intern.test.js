const Employee = require("../lib/Employee")
const Intern = require("../lib/Intern")



test('Success checks on the employee class', () => {
    const e = new Intern()
    expect(typeof(e)).toBe('object')
    })
    