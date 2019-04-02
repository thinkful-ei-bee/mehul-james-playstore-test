'use strict';

const app = require('../app');
const expect = require('chai').expect;
const request = require('supertest');

describe('playstore GET /app endpoint', () => {

  it('should give an object back with details about string a', () => {
    return request(app)
      .get('/app') // invoke the endpoint // send the query string ?n=5
      .expect(200)  //assert that you get a 200  OK status
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.deep.include({'f':1,'unique':1,'average':1,'highest':'f'});
      });
  });

  it('should error out', () => {
    return request(app)
      .get('/frequency') // invoke the endpoint //assert that you get a 200  OK status
      .expect(400, 'Invalid request');
  });

  it('should give an object back with details about string zzzz', () => {
    return request(app)
      .get('/frequency') // invoke the endpoint
      .query({'s':'zzzz',}) // send the query string ?n=5
      .expect(200)  //assert that you get a 200  OK status
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.deep.include({'z':4,'unique':1,'average':4,'highest':'z'});
      });
  });

});