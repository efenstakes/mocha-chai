const expect = require('chai').expect
const axios = require('axios')




// check status code 
// check properties
// check property values



const BASE_URL = 'http://localhost:4444'
const ACCOUNT_URL = `${BASE_URL}/api/accounts`



describe('Get Accounts', function() {

    // check returned users are initially 3
    it('check only 3 users are returned', async function() {

        try{
            const request = await axios.get(ACCOUNT_URL)
            const data = request.data 

            expect(request.status).to.be.equal(200)

            expect(data).to.have.property('accounts')
            expect(data.accounts).to.be.an('array')
            expect(data.accounts).to.have.length(3)

        }catch(e) {
            throw e
        }

    })



})


describe('Create Account', function() {


    // check name is provided
    it('should ensure that name is provided for user to be created', async function() {

        try{
            const request = await axios.post(ACCOUNT_URL, { email: 'Lonze@gmail.com' })
            const body = request.data

            expect(request.status).to.be.equal(200)
            expect(body).to.have.property('errors')
            expect(body).to.have.property('saved')
            
            expect(body.saved).to.be.false
            expect(body.errors).to.be.an('array').with.lengthOf(2)
    
        }catch(e) {
            throw e
        }
        
    })

    
    // check email is provided
    it('should ensure that email is provided for user to be created', async function() {

        try{
            const request = await axios.post(`${BASE_URL}/api/accounts`, { name: 'Tim Kaine' })
            const body = request.data

            expect(request.status).to.be.equal(200)
            
            expect(body).to.have.property('saved')
            expect(body.saved).to.be.false
            expect(body).to.have.property('errors')
            expect(body.errors).to.be.lengthOf(2)
    
        }catch(e) {
            throw e
        }
    
    })


    // check email and name is provided
    it('should ensure that email and name are provided for user to be created', async function() {

        try{
            const request = await axios.post(`${BASE_URL}/api/accounts`, { })
            const body = request.data

            expect(request.status).to.be.equal(200)
            
            expect(body).to.have.property('saved')
            expect(body.saved).to.be.false
            expect(body).to.have.property('errors')
            expect(body.errors).to.be.lengthOf(4)
    
        }catch(e) {
            throw e
        }
    
    })

    
    // check user is created
    it('should ensure account is created', async function() {

        try{
            const request = await axios.post(`${BASE_URL}/api/accounts`, { email: 'Lonze@gmail.com', name: 'Lonze Kaine' })
            const body = request.data

            expect(request.status).to.be.equal(200)
            
            expect(body).to.have.property('saved')
            expect(body.saved).to.be.true
            expect(body).to.have.property('errors')
            expect(body.errors).to.be.lengthOf(0)
        
        }catch(e) {
            throw e
        }
        
    })

    // check users are 4 now
    it('check only 4 users exist', async function() {

        try{
            const request = await axios.get(ACCOUNT_URL)
            const data = request.data 

            expect(request.status).to.be.equal(200)

            expect(data).to.have.property('accounts')
            expect(data.accounts).to.be.an('array').with.lengthOf(4)
            expect(data.accounts).to.have.length(4)

        }catch(e) {
            throw e
        }

    })

})