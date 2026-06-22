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

const mockProfiles = {
    AAPL: {
        symbol: "AAPL",
        companyName: "Apple Inc.",
        price: 195.64,
        changes: 2.31,
        changesPercentage: 1.19,
        image: "https://financialmodelingprep.com/image-stock/AAPL.png",
        website: "https://www.apple.com",
        description: "Apple Inc. designs, manufactures, and sells consumer electronics, software, and online services."
    },
    MSFT: {
        symbol: "MSFT",
        companyName: "Microsoft Corporation",
        price: 420.55,
        changes: -1.25,
        changesPercentage: -0.3,
        image: "https://financialmodelingprep.com/image-stock/MSFT.png",
        website: "https://www.microsoft.com",
        description: "Microsoft Corporation develops software, cloud services, devices, and business solutions."
    }
}

const mockHistory = {
    AAPL: [
        { date: "2024-01-01", close: 185 },
        { date: "2024-02-01", close: 188 },
        { date: "2024-03-01", close: 192 },
        { date: "2024-04-01", close: 189 },
        { date: "2024-05-01", close: 196 }
    ],
    MSFT: [
        { date: "2024-01-01", close: 390 },
        { date: "2024-02-01", close: 405 },
        { date: "2024-03-01", close: 412 },
        { date: "2024-04-01", close: 408 },
        { date: "2024-05-01", close: 420 }
    ]
}

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

const getMockCompanyProfile = function (symbol) {
    const profile = mockProfiles[symbol]

    if (!profile) {
        return {
            result: false,
            message: "Mock profile not found"
        }
    }

    return {
        result: true,
        data: profile
    }
}

const getMockCompanyHistory = function (symbol) {
    const history = mockHistory[symbol]

    if (!history) {
        return {
            result: false,
            message: "Mock history not found"
        }
    }

    return {
        result: true,
        data: history
    }
}

export {
    searchMockCompanies,
    getMockCompanyProfile,
    getMockCompanyHistory
}