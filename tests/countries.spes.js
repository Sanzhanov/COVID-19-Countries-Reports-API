import { expect } from 'chai'
import CountriesHelper from '../helpers/countries.helper'


describe('Get countries', function () {
    const countriesHelper = new CountriesHelper()
    let response

    before(async function () {
        response = await countriesHelper.get()
        console.log(response)
    })

    it('Response status code is 200', function () {
        expect(response.status).to.eq(200)
    })

    it('Response body contains array of strings with length of 2', function () {
        for (let entry of response.body) {
            expect(entry).to.be.a('string')
            expect(entry.length).to.eq(2)
        }
    })
})
