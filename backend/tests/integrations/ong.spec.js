const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connections')

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async () => {
        await connection.destroy()
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APAE2",
            email: "ap2@gmail.com",
            whatsapp: "5598983075807",
            city: "Rio de Janeiro",
            uf: "RJ"
        })

        console.log(response.body)
    })
})