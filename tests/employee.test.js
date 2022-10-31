const Employee = require('../lib/employee');
const employee = new Employee ('Andre', 3000, 'andre3k@gmail.com');
describe ('Employee', () => {
    it ('should create a new object with name, id, and an email', () => {
   
    expect(employee.name).toEqual('Andre');
    expect(employee.id).toEqual(3000);
    expect(employee.email).toEqual('andre3k@gmail.com');
    });

    it('should get employee name', () => {
        expect(employee.getName()).toEqual('Andre');
    });

    it('should get employee id', () => {
        expect(employee.getId()).toEqual(3000);
    });

    it('should get employee email', () => {
        expect(employee.getEmail()).toEqual('andre3k@gmail.com');
    });

    it('should get employee role', () => {
        expect(employee.getRole()).toEqual('Employee');
    });
});