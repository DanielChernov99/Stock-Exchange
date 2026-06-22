const SearchController = function (model, renderer) {
    const handleSearch = async function (showEmptyStringError) {
        renderer.clearErrors()
        renderer.clearResults()

        const query = renderer.getInputValue()

         if (!query) {
            if (showEmptyStringError) {
                renderer.showError("Please enter company name or symbol")
            }
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
    const debounce = function(callback,delay = 1000){
        let timeout
        return (...args) => {
            clearTimeout(timeout)
            timeout = setTimeout(()=>{
                callback(...args)
            },delay)
        }
    }

    const init = function () {
        renderer.onSearch(() => handleSearch(true))
        renderer.onTyping(debounce(() => handleSearch(false),700))
    }

    return {
        init
    }
}

export default SearchController