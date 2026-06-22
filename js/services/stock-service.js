import { API_KEY, USE_MOCK_API } from "../config.js"

const StockService = function () {
    const mockCompanies = [
        { name: "Apple Inc.", symbol: "AAPL" },
        { name: "Microsoft Corporation", symbol: "MSFT" },
        { name: "NVIDIA Corporation", symbol: "NVDA" },
        { name: "Amazon.com Inc.", symbol: "AMZN" },
        { name: "Tesla Inc.", symbol: "TSLA" },
        { name: "Alphabet Inc.", symbol: "GOOGL" },
        { name: "Meta Platforms Inc.", symbol: "META" },
        { name: "Advanced Micro Devices Inc.", symbol: "AMD" },
        { name: "Netflix Inc.", symbol: "NFLX" },
        { name: "American Airlines Group Inc.", symbol: "AAL" }
    ]

    const searchMockCompanies = function (query) {
        const lowerQuery = query.toLowerCase()

        const filteredCompanies = mockCompanies.filter(company => {
            return company.name.toLowerCase().includes(lowerQuery) ||
                   company.symbol.toLowerCase().includes(lowerQuery)
        })

        return {
            result: true,
            data: filteredCompanies.slice(0, 10)
        }
    }

    const searchCompanies = async function (query) {
        if (USE_MOCK_API) {
            return searchMockCompanies(query)
        }
        const cleanQuery = encodeURIComponent(query)

        try {
            const response = await fetch(
                `https://financialmodelingprep.com/stable/search-symbol?query=${cleanQuery}&apikey=${API_KEY}`               
            )

            if (!response.ok) {
                return {
                    result: false,
                    message: "Failed to search companies"
                }
            }

            const data = await response.json()

            return {
                result: true,
                data: data
            }
        } catch (error) {
            return {
                result: false,
                message: "Something went wrong while searching companies"
            }
        }
    }

    return {
        searchCompanies
    }
}

export default StockService