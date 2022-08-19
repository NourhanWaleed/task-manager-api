const request = require('supertest')
const app = require('../src/app.js')
const User = require('../src/models/user')

const userOne = {
    name: 'Mike',
    email:'mike@example.com',
    password: 'blablabla'
}

beforeEach(async () =>{
   await User.deleteMany()
   await new User(userOne).save()
})

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Andrew',
        email: 'andrew@example.com',
        password: 'MyPass777!'
    }).expect(201)
})

test('should login existing user', async () =>{
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('should not login non existing user', async () =>{
    await request(app).post('/users/login').send({
        email: 'watchoutbla@bla.com',
        password: userOne.password
    }).expect(400)
})