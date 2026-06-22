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
        const response = await stockService.searchCompanyProfile(symbol)

        if (!response.result) {
            return response
        }
        const companyData = response.data

        return {
            result: true,
            company: {
                symbol: companyData.symbol,
                price: companyData.price,
                changePercentage: companyData.changePercentage,
                companyName: companyData.companyName,
                currency: companyData.currency,
                exchangeFullName: companyData.exchangeFullName,
                exchange: companyData.exchange,
                website: companyData.website,
                description: companyData.description,
                sector: companyData.sector,
                industry: companyData.industry,
                country: companyData.country,
                image: companyData.image
            }
        }
    }
    const formatCompanyHistory = function(historyData) {
        const historyArray = Array.isArray(historyData) ? historyData : historyData.historical

        if (!historyArray || historyArray.length === 0) {
            return {
                labels: [],
                prices: []
            }
        }

        const sortedHistory = historyArray
            .slice()
            .sort((a, b) => new Date(a.date) - new Date(b.date))

        const filteredHistory = sortedHistory.length > 100
            ? sortedHistory.filter((day, index) => index % 30 === 0)
            : sortedHistory

        return {
            labels: filteredHistory.map(day => day.date),
            prices: filteredHistory.map(day => Number(day.close.toFixed(2)))
        }
    }

    const getCompanyHistory = async function(symbol) {
        const response = await stockService.searchCompanyHistory(symbol)

        if (!response.result) {
            return response
        }

        return {
            result: true,
            chartData: formatCompanyHistory(response.data)
        }
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