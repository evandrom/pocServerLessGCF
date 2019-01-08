const expect = require('chai').expect;

const { hello } = require('../routes/greetings');

let req = {
    body: {},
};

describe('Greetings Route', function() {
    describe('Hello() function', function() {
        it('Should error out if no name provided ', function() {
            const result = hello(req);
            expect(result).to.contain('error');
        });

        it('Should respond in English as default', function() {
            let newReq = req;
            newReq.body.name = 'Jody';
            
            const result = hello(req);
            expect(result).to.equal('Hello, Jody');
        });

        it('Should error on invalid language', function() {
            let newReq = req;
            newReq.body.name = 'Jody';
            newReq.body.language = 'bad-input';
            
            const result = hello(req);
            expect(result).to.equal('Error: Invalid Language');
        });

        it('Should return greeting for english, spanish, or german', function() {
            let newReq = req;
            newReq.body.name = 'Jody';

            newReq.body.language = 'en';
            var result = hello(newReq);
            expect(result).to.equal('Hello, Jody');

            newReq.body.language = 'es';
            result = hello(newReq);
            expect(result).to.equal('Hola, Jody');

            newReq.body.language = 'de';
            result = hello(newReq);
            expect(result).to.equal('Hallo, Jody');
        });
    })
});