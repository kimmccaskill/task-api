const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
  name: 'Mike',
  email: 'mike@example.com',
  password: '56what!!'
}

beforeEach(async () => {
  await User.deleteMany()
  await new User(userOne).save() 
})

test('Should signup a new user', async () => {
  await request(app).post('/users').send({
    name: 'Kim',
    email: 'kim@example.com',
    password: 'MyPass777!'
  }).expect(201)
})

test('Shoud login existing user', async () => {
  await request(app).post('/users/login').send({
    email: userOne.email,
    password: userOne.password
  }).expect(200)
})

test('Should not log in non-existent user', async () => {
  await request(app).post('/users/login').send({
    email: 'fake@example.com',
    password: 'fakePass123!!'
  }).expect(400)
})