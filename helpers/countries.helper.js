import supertest from 'supertest'

export default class CountriesHelper {
    response

    async get() {
        this.response = await supertest(process.env.BASE_URL)
            .get('/country_codes')
            .send()
        return this.response
    }
}