const Engineer = require('../lib/engineer');


const engineer = new Engineer ('Bob', 150, 'bob3@gmail.com', 'Robert37');
    describe('Engineer', () => {
        it('should create engineer', () => {
            expect(engineer.name).toEqual('Bob');
            expect(engineer.id).toEqual(150);
            expect(engineer.email).toEqual('bob3@gmail.com');
            expect(engineer.github).toEqual('Robert37');
        });

        it ("should get engineer's github", () => {
            expect(engineer.getGithub()).toEqual('Robert37');
        });
        it ("should get engineer role", () => {
            expect(engineer.getRole()).toEqual('Engineer');
        });
});

