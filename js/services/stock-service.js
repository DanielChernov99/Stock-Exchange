import { API_KEY, USE_MOCK_API } from "../config.js"
import {
    searchMockCompanies,
    getMockCompanyProfile,
    getMockCompanyHistory
} from "./stock-mock-service.js"

const StockService = function () {
   
    const searchCompanies = async function (query) {
        if (USE_MOCK_API) {
            return searchMockCompanies(query)
        }
        const cleanQuery = encodeURIComponent(query)

        try {
            const response = await fetch(
                `https://financialmodelingprep.com/stable/search-symbol?query=${cleanQuery}&apikey=${API_KEY}`               
            )

            if (!response.ok) {
                return {
                    result: false,
                    message: "Failed to search companies"
                }
            }

            const data = await response.json()

            return {
                result: true,
                data: data
            }
        } catch (error) {
            return {
                result: false,
                message: "Something went wrong while searching companies"
            }
        }
    }

    const searchCompanyProfile = async function(symbol){
        if(USE_MOCK_API){
            return getMockCompanyProfile(symbol)
        }
        try{
            const response = await fetch(
                `https://financialmodelingprep.com/stable/profile?symbol=${symbol}&apikey=${API_KEY}`
            )
            if (!response.ok) {
                return {
                    result: false,
                    message: "Failed to search companie Profile"
                }
            }

            const data = await response.json()

            return {
                result: true,
                data: Array.isArray(data) ? data[0] : data
            }
        }
        catch(error){
            return {
                result: false,
                message: "Something went wrong while searching companies"
            }
        }
    }

    const searchCompanyHistory = async function(symbol){
        if(USE_MOCK_API){
            return getMockCompanyHistory(symbol)
        }
        try{
            const response = await fetch(
                `https://financialmodelingprep.com/stable/historical-price-eod/full?symbol=${symbol}&apikey=${API_KEY}`
            )
            if (!response.ok) {
                return {
                    result: false,
                    message: "Failed to search company history"
                }
            }

            const data = await response.json()

            return {
                result: true,
                data: data
            }
        }
        catch(error){
            return {
                result: false,
                message: "Something went wrong while searching companies"
            }
        }
    }

    return {
        searchCompanies,
        searchCompanyProfile,
        searchCompanyHistory
    }
}

export default StockService