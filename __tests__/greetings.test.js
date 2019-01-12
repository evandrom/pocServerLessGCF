const { hello } = require('../service/greetings');

let req = {
    body: {},
};

describe('Greetings Route', () => {
    describe('Hello() function', () => {
        test('Should error out if no name provided ', () => {
            const result = hello(req);
            expect(result).toContain('error');
        });

        test('Should respond in English as default', () => {
            let newReq = req;
            newReq.body.name = 'Jody';
            
            const result = hello(req);
            expect(result).toEqual('Hello, Jody');
        });

        test('Should error on invalid language', () => {
            let newReq = req;
            newReq.body.name = 'Jody';
            newReq.body.language = 'bad-input';
            
            const result = hello(req);
            expect(result).toEqual('Error: Invalid Language');
        });

        test('Should return greeting for english, spanish, or german', () => {
            let newReq = req;
            newReq.body.name = 'Jody';

            newReq.body.language = 'en';
            var result = hello(newReq);
            expect(result).toEqual('Hello, Jody');

            newReq.body.language = 'es';
            result = hello(newReq);
            expect(result).toEqual('Hola, Jody');

            newReq.body.language = 'de';
            result = hello(newReq);
            expect(result).toEqual('Hallo, Jody');
        });
    })
});