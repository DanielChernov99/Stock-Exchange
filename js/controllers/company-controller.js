const CompanyController = function () {   
    const urlParams = new URLSearchParams(window.location.search)
    const symbol = urlParams.get("symbol")

    console.log("company controller works")
    console.log(symbol)

    return {}
}

CompanyController()

export default CompanyController