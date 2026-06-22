const CompanyView = function () {
    const companyInfo = document.querySelector("#compInfo")

    const renderCompanyProfile = function(company) {
        companyInfo.innerHTML = ""

        const container = document.createElement("div")
        container.classList.add("company-profile")

        const image = document.createElement("img")
        image.classList.add("company-logo")
        image.src = company.image
        image.alt = company.companyName

        const title = document.createElement("h1")
        title.textContent = `${company.companyName} (${company.symbol})`

        const price = document.createElement("p")
        price.classList.add("company-price")
        price.textContent = `Stock price: $${company.price}`

        const change = document.createElement("span")
        change.textContent = ` (${company.changePercentage}%)`

        if (company.changePercentage >= 0) {
            change.classList.add("positive-change")
        } else {
            change.classList.add("negative-change")
        }

        price.appendChild(change)

        const meta = document.createElement("p")
        meta.classList.add("company-meta")
        meta.textContent = `${company.sector || ""} ${company.industry ? "- " + company.industry : ""}`

        const description = document.createElement("p")
        description.classList.add("company-description")
        description.textContent = company.description

        const website = document.createElement("a")
        website.href = company.website
        website.textContent = "Company Website"
        website.target = "_blank"

        container.append(image, title, price, meta, description, website)
        companyInfo.appendChild(container)
    }

    return {
        renderCompanyProfile
    }
}

export default CompanyView