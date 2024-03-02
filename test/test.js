const request = require('supertest');
const app = require('../index');

describe('GET /', ()=>{
    it('should return home page', (done) => {
        request(app).get('/').expect({message: 'this is home page'}, done);
    });
});

describe('GET /about', ()=>{
    it('should return about page', (done) => {
        request(app).get('/about').expect({message: 'this is about page'}, done);
    });
});