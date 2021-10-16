const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");


test('Success checks on the employee class', () => {
    const e = new Manager()
    expect(typeof(e)).toBe('object')
    })