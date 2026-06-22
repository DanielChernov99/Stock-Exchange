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
        changePercentage: 1.19,
        currency: "USD",
        exchangeFullName: "NASDAQ Global Select",
        exchange: "NASDAQ",
        sector: "Technology",
        industry: "Consumer Electronics",
        country: "US",
        image: "https://financialmodelingprep.com/image-stock/AAPL.png",
        website: "https://www.apple.com",
        description: "Apple Inc. designs, manufactures, and sells consumer electronics, software, and online services."
    },
    MSFT: {
        symbol: "MSFT",
        companyName: "Microsoft Corporation",
        price: 420.55,
        changePercentage: -0.3,
        currency: "USD",
        exchangeFullName: "NASDAQ Global Select",
        exchange: "NASDAQ",
        sector: "Technology",
        industry: "Software - Infrastructure",
        country: "US",
        image: "https://financialmodelingprep.com/image-stock/MSFT.png",
        website: "https://www.microsoft.com",
        description: "Microsoft Corporation develops software, cloud services, devices, and business solutions."
    },
    NVDA: {
        symbol: "NVDA",
        companyName: "NVIDIA Corporation",
        price: 875.28,
        changePercentage: 2.14,
        currency: "USD",
        exchangeFullName: "NASDAQ Global Select",
        exchange: "NASDAQ",
        sector: "Technology",
        industry: "Semiconductors",
        country: "US",
        image: "https://financialmodelingprep.com/image-stock/NVDA.png",
        website: "https://www.nvidia.com",
        description: "NVIDIA Corporation designs graphics processing units, AI chips, and computing platforms."
    },
    AMZN: {
        symbol: "AMZN",
        companyName: "Amazon.com Inc.",
        price: 182.41,
        changePercentage: 0.85,
        currency: "USD",
        exchangeFullName: "NASDAQ Global Select",
        exchange: "NASDAQ",
        sector: "Consumer Cyclical",
        industry: "Internet Retail",
        country: "US",
        image: "https://financialmodelingprep.com/image-stock/AMZN.png",
        website: "https://www.amazon.com",
        description: "Amazon.com Inc. operates e-commerce, cloud computing, digital streaming, and logistics businesses."
    },
    TSLA: {
        symbol: "TSLA",
        companyName: "Tesla Inc.",
        price: 248.76,
        changePercentage: -1.42,
        currency: "USD",
        exchangeFullName: "NASDAQ Global Select",
        exchange: "NASDAQ",
        sector: "Consumer Cyclical",
        industry: "Auto Manufacturers",
        country: "US",
        image: "https://financialmodelingprep.com/image-stock/TSLA.png",
        website: "https://www.tesla.com",
        description: "Tesla Inc. designs and manufactures electric vehicles, energy storage systems, and solar products."
    }
}


const createMockHistory = function(symbol, startPrice) {
    return [
        { symbol, date: "2023-08-01", close: startPrice },
        { symbol, date: "2023-09-01", close: startPrice * 1.04 },
        { symbol, date: "2023-10-01", close: startPrice * 0.98 },
        { symbol, date: "2023-11-01", close: startPrice * 1.08 },
        { symbol, date: "2023-12-01", close: startPrice * 1.12 },
        { symbol, date: "2024-01-01", close: startPrice * 1.2 },
        { symbol, date: "2024-02-01", close: startPrice * 1.16 },
        { symbol, date: "2024-03-01", close: startPrice * 1.25 },
        { symbol, date: "2024-04-01", close: startPrice * 1.31 },
        { symbol, date: "2024-05-01", close: startPrice * 1.38 }
    ]
}

const mockHistory = {
    AAPL: createMockHistory("AAPL", 150),
    MSFT: createMockHistory("MSFT", 330),
    NVDA: createMockHistory("NVDA", 500),
    AMZN: createMockHistory("AMZN", 130),
    TSLA: createMockHistory("TSLA", 220)
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