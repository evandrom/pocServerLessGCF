const request = require('supertest');
const app = require('../index')

describe('Unit testing the /home route', () => {
    let data = {
        "name": "dummy",
        "language": "en"
    }

    test('POST respond with 200 with Hello', () => {
        return request(app.http)
            .post('/greeting/')
            .send(data)
            .set('Accept', 'application/json')
            .then(function(response){
                expect(response.status).toEqual(200)
                expect(response.body.greeting).toEqual('Hello, dummy');
            });
    });

    test('should return 200 status', async () => {
      return request(app.http)
        .get('/hello/evandro')
        .then(function(response){
            expect(response.status).toEqual(200)
        })
    });

    test.skip('POST hould return OK status', async () => {
        return request(app.http)
          .post('/hello/evandro')
          .then(function(response){
            expect(response.status).toEqual(200)
            expect(response.body).toMatch(expect.any(String))
          })
      });

    test('should return NOT FOUND status', async () => {
        return request(app.http)
          .get('/fool')
          .then(function(response){
            expect(response.status).toEqual(404)
          })
      });

});