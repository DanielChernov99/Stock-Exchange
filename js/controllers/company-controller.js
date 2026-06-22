import StockModel from "../models/stock-model.js"

const CompanyController = async function () {   
    const model = StockModel()

    const urlParams = new URLSearchParams(window.location.search)
    const symbol = urlParams.get("symbol")

    console.log("symbol:", symbol)

    const profileResponse = await model.getCompanyProfile(symbol)
    console.log("profile response:", profileResponse)

    const historyResponse = await model.getCompanyHistory(symbol)
    console.log("history response:", historyResponse)

    return {}
}

CompanyController()

export default CompanyController