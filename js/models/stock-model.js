import StockService from "../services/stock-service.js"

const StockModel = function () {
    const stockService = StockService()

    let companies = []

    const searchCompanies = async function (query) {
        const response = await stockService.searchCompanies(query)

        if (!response.result) {
            return response
        }
        companies = response.data

        return {
            result: true,
            data: companies
        }
    }
    const getCompanyProfile = async function(symbol) {
        const response = await stockService.searchCompanyProfile(query)

        if (!response.result) {
            return response
        }
        companies = response.data

        return {
            result: true,
            data: companies
        }
    }

    const getCompanyHistory = async function(symbol) {
        // fetch historical price by symbol
    }
    const getCompanies = function () {
        return companies
    }

    return {
        searchCompanies,
        getCompanies,
        getCompanyProfile,
        getCompanyHistory
    }
}

export default StockModel