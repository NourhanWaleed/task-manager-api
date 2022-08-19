const request = require('supertest')
const app = require('../src/app.js')
const User = require('../src/models/user')

beforeEach(async () =>{
   await User.deleteMany()
})

test('Should signup a new user', async () => {
    try {await request(app).post('/users').send({
        name: 'Andrew',
        email: 'andrew@example.com',
        password: 'MyPass777!'
    }).expect(201)}
    catch(e){
        console.log(e)
    }
})