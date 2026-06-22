import StockModel from "../models/stock-model.js"
import CompanyView from "../view/company-view.js"

const CompanyController = async function () {   
    const model = StockModel()
    const view = CompanyView()

    const urlParams = new URLSearchParams(window.location.search)
    const symbol = urlParams.get("symbol")

    const profileResponse = await model.getCompanyProfile(symbol)

    if (!profileResponse.result) {
        console.log(profileResponse.message)
        return
    }

    view.renderCompanyProfile(profileResponse.company)

    const historyResponse = await model.getCompanyHistory(symbol)
    console.log("history response:", historyResponse)
}

CompanyController()

export default CompanyController