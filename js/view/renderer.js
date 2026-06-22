
const Renderer = function(){
    const searchInput = document.querySelector("#searchInput")
    const searchButton = document.querySelector("#searchButton")
    const loadingElement = document.querySelector("#loading")
    const errorElement = document.querySelector("#errorMessage")
    const succsessElement = document.querySelector("#successMessage")
    const resultList = document.querySelector("#resultsList")


    const getInputValue = () => {
        return searchInput.value.trim()
    }

    const showLoading = function () {
        loadingElement.classList.remove("hidden")
    }
    const hideLoading = function () {
        loadingElement.classList.add("hidden")
    }

    const showError = (msg) =>{
        errorElement.textContent = msg
        errorElement.classList.remove("hidden")
    }

    const clearErrors = function(){
        errorElement.textContent = ""
        errorElement.classList.add("hidden")

    }
    const clearResults = function () {
        resultList.innerHTML = ""
    }
    const renderCompanies = function(companies){
        clearResults()
        
        companies.forEach(c => {
            const companyName = c.name
            const companySymbol = c.symbol

            const listItem = document.createElement("li")
            listItem.classList.add("company-item")

            const companyLink = document.createElement("a")
            companyLink.classList.add("company-link")
            companyLink.href = `company.html?symbol=${companySymbol}`

            const nameSpan = document.createElement("span")
            nameSpan.classList.add("company-name")
            nameSpan.textContent = companyName

            const symbolSpan = document.createElement("span")
            symbolSpan.classList.add("company-symbol")
            symbolSpan.textContent = `(${companySymbol})`

            companyLink.append(nameSpan,symbolSpan)
            listItem.appendChild(companyLink)
            resultList.appendChild(listItem)
        }); 
    }
    const onSearch = function (callback) {
        searchButton.addEventListener("click", callback)
    }

    return{
        getInputValue,
        showLoading,
        hideLoading,
        showError,
        clearErrors,
        clearResults,
        renderCompanies,
        onSearch
    }
}

export default Renderer