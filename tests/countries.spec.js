import { expect } from 'chai'
import CountriesHelper from '../helpers/countries.helper'

describe('Get countries', function () {
    const countriesHelper = new CountriesHelper()
    let response

    before(async function () {
        response = await countriesHelper.get()
    })

    it('Response status code is 200', function () {
        expect(response.status).to.eq(200)
    })

    it('Response has headers', function () {
        expect(response.headers).not.to.be.undefined
    })

    it('Response body contains array of strings with length of 2', function () {
        for (let entry of response.body) {
            expect(entry).to.be.a('string')
            expect(entry.length).to.eq(2)
        }
    })
})
