const CompanyView = function () {
    const companyInfo = document.querySelector("#compInfo")

    const renderCompanyProfile = function(company) {
        companyInfo.innerHTML = ""

        const container = document.createElement("div")
        container.classList.add("company-container")

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

    const renderChart = function(chartData) {
        const stockChart = document.querySelector("#stockChart")
        const ctx = stockChart.getContext("2d")

        new Chart(ctx, {
            type: "line",
            data: {
                labels: chartData.labels,
                datasets: [{
                    label: "Stock Price History",
                    data: chartData.prices,
                    borderWidth: 2,
                    fill: false,
                    pointRadius: 3,
                    lineTension: 0
                }]
            },
            options: {
                responsive: true,
                scales: {
                    xAxes: [{
                        ticks: {
                            maxTicksLimit: 8
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        }
                    }]
                }
            }
        })
    }

    return {
        renderCompanyProfile,
        renderChart
    }
}

export default CompanyView