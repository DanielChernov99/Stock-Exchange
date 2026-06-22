const SearchController = function (model, renderer) {
    const handleSearch = async function(){
        renderer.clearErrors()

        const quary = renderer.getInputValue()
        if (quary==="") {
            renderer.showError("Please enter company name or symbol")
            return
        }
        renderer.showLoading()
        const response = await model.searchCompanies(quary)
        if (!response.reslt){
            renderer.showError(response.message)
            return
        }
        renderer.renderCompanies(response.data)
    }
    const init = function () {
        renderer.onSearch(handleSearch)
    }
    return{
        init
    }
}

export default SearchController