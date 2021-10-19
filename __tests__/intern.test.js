const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("Success checks on the employee class", () => {
  const e = new Intern();
  expect(typeof e).toBe("object");
});

test('Success check of constructor arguments', () => {
  const name = 'Travis'
  const id = '3'
  const school = 'UCLA'
  const email = 'hello@gmail.com'
  const employee = new Intern(name,id,email,school)
  expect(employee.name).toBe(name)
  expect(employee.id).toBe(id)
  expect(employee.email).toBe(email)
  expect(employee.school).toBe('UCLA')
})

test('getRole() should return role of Intern', () => {
  
  const i = new Intern('bob', 2, 'email','school');
  expect(i.getRole()).toBe('Intern');
  expect(i.getSchool()).toBe('school')
  })