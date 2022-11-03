import supertest from 'supertest'

export default class CasesHelper {
    response

    async get(code) {
        this.response = await supertest(process.env.BASE_URL)
            .get(`/country/${code}`)
            .send()
        return this.response
    }
}

