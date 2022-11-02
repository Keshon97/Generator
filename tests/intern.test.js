const Intern = require('../lib/intern');

const intern = new Intern ('Jack', 444, 'JackT@gmail.com', 'Texas State University');
    describe('Intern', () => {
        it('should create intern', () => {
            expect(intern.name).toEqual('Jack');
            expect(intern.id).toEqual(444);
            expect(intern.email).toEqual('JackT@gmail.com');
            expect(intern.school).toEqual('Texas State University');
        });
        
        it ("should return employee's school", () => {
            expect(intern.getSchool()).toEqual('Texas State University');
        });

        it ("should return Intern", () => {
            expect(intern.getRole()).toEqual('Intern');
        });
    });

module.exports = Intern;
