const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("Success checks on the employee class", () => {
  const e = new Intern();
  expect(typeof e).toBe("object");
});

test('Success check of constructor arguments', () => {
  const name = 'Travis'
  const id = '3'
  const school = 'school'
  const employee = new Intern(name,id,school)
  expect(employee.name).toBe(name)
  expect(employee.id).toBe(id)
  expect(employee.email).toBe(school)
})

test('getRole() should return role of Manager', () => {
  
  const i = new Intern('bob', 2, 'email','school');
  expect(i.getRole()).toBe('Intern');
  expect(i.getSchool()).toBe('school')
  })