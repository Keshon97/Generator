const Manager = require('../lib/manager');

const manager = new Manager ('Jack', 1980, 'JackT@gmail.com', 237);
    describe('Manager', () => {
        it('should create manager', () => {
            expect(manager.name).toEqual('Jack');
            expect(manager.id).toEqual(1980);
            expect(manager.email).toEqual('JackT@gmail.com');
            expect(manager.officeNumber).toEqual(237);
        });

        it ("should create manager's office number", () => {
            expect(manager.getOfficeNumber()).toEqual(237);
        })

        it ("should return manager", () => {
            expect(manager.getRole()).toEqual('Manager');
        });
    });
