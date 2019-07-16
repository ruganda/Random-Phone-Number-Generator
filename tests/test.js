const app = require('../server.js');
const  request = require('supertest');
const expect = require('chai').expect;



describe('Phone generator app', ()=>{

  it('generate phone numbers', (done)=>{
    request(app).post('/')
    .send({
      "number": 40,
    })
   .end((err, res)=>{
    expect(res.status).to.equal(201)
    done();
   })
   
  })

  it('Retrieve the phone number details', (done)=>{
    request(app).get('/')
   .end((err, res)=>{
    expect(res.status).to.equal(200)
    done();
   })
   
  })
})