const assert = require('assert');
const expect = require('chai').expect
const request = require('supertest');
const app = require('../index')

describe('Unit testing the /home route', function() {
    let data = {
        "name": "dummy",
        "language": "en"
    }

    it('POST respond with 200 with Hello', function () {
        return request(app.http)
            .post('/greeting/')
            .send(data)
            .set('Accept', 'application/json')
            .then(function(response){
                assert.equal(response.status, 200)
                expect(response.body.greeting).to.equal('Hello, dummy');
            });
    });

    it('should return 200 status', async function() {
      return request(app.http)
        .get('/hello/evandro')
        .then(function(response){
            assert.equal(response.status, 200)
        })
    });

    it('POST hould return OK status', async function() {
        return request(app.http)
          .post('/hello/evandro')
          .then(function(response){
              assert.equal(response.status, 200)
              expect(response.body).to.be.a('object');
          })
      });


    it('should return NOT FOUND status', async function() {
        return request(app.http)
          .get('/fool')
          .then(function(response){
              assert.equal(response.status, 404)
          })
      });

});