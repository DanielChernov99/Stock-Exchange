const SearchController = function (model, renderer) {
    const handleSearch = async function () {
        renderer.clearErrors()
        renderer.clearResults()

        const query = renderer.getInputValue()

        if (!query) {
            renderer.showError("Please enter company name or symbol")
            return
        }

        renderer.showLoading()

        const response = await model.searchCompanies(query)

        renderer.hideLoading()

        if (!response.result) {
            renderer.showError(response.message)
            return
        }

        if (response.data.length === 0) {
            renderer.showError("No companies found")
            return
        }

        renderer.renderCompanies(response.data)
    }

    const init = function () {
        renderer.onSearch(handleSearch)
    }

    return {
        init
    }
}

export default SearchController