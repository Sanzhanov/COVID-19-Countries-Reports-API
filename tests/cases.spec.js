import CountriesHelper from '../helpers/countries.helper'
import CasesHelper from '../helpers/cases.helper'
import { expect } from 'chai'
import getRandomValue from '../helpers/common.helper'

describe('Cases', function () {
    describe('Valid country code', function () {
        const countriesHelper = new CountriesHelper()
        const casesHelper = new CasesHelper()
        let response, code

        before(async function () {
            response = (await countriesHelper.get()).body
            code = getRandomValue(response)
            response = await casesHelper.get(code)

        })

        it('Response status code is 200', function () {
            expect(response.status).to.eq(200)
        })

        it('Response body contains country code from request', function () {
            for (let entry of response.body) {
                expect(entry.Country_code).to.eq(code)
            }
        })
    })

    describe('Invalid country code', function () {
        const countriesHelper = new CountriesHelper()
        const casesHelper = new CasesHelper()
        let response, code

        before(async function () {
            response = (await countriesHelper.get()).body
            code = await getRandomValue(response)
            response = await casesHelper.get(code.toLowerCase())
        })

        it('Response status code is 404', function () {
            expect(response.status).to.eq(404)
        })

        it('Response body contains an error message', function () {
            expect(response.body.message).to.eq(`Country code ${code.toLowerCase()} not found!`)
        })
    })
})