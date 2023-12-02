import { expect } from "chai"
import request from "supertest"
import app from '../app.js'

describe('Test on /categories path',()=>{

    let server = null
    let api = null

    before(async()=>{
        server = await app.listen(8000)
        api = request(app)
    })

    describe('GET /categories', ()=>{

        it('On succes should return status 200, an object with succes: "ok" and array of categories" ', async()=>{
            const {body, statusCode} = await api.get('/categories')
            //console.log(response.body)
            //console.log(response.statusCode)
            expect(statusCode).to.equal(200)
            //expect(body).to.have.property('success')
            //expect(body.success).to.equal('ok')
            expect(body.response.length).to.be.greaterThan(0)
        })
    
    })
    //describe('GET /categories', ()=>{second})
    //describe('GET /categories', ()=>{second})


describe('POST /categories', ()=>{

    it('On succes should return status 200, an object with succes: "ok" and array of categories" ', async()=>{
        
        

        const {body, statusCode} = await api.post('/categories')
        //console.log(response.body)
        //console.log(response.statusCode)
        expect(statusCode).to.equal(200)
        //expect(body).to.have.property('success')
        //expect(body.success).to.equal('ok')
        expect(body.response.length).to.be.greaterThan(0)
    })

})
//describe('GET /categories', ()=>{second})
//describe('GET /categories', ()=>{second})

}) 