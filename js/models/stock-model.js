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
    const getCompanies = function () {
        return companies
    }
    
    return {
        searchCompanies,
        getCompanies
    }
}

export default StockModel