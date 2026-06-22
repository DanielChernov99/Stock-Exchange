
const searchCompanies = async function(quary){
    try{
        const response = await fetch(`https://financialmodelingprep.com/api/v3/search?query=${cleanQuery}&limit=10&exchange=NASDAQ&apikey=${API_KEY}`)
        if(!response.ok){
            return {
                result:false,
                message:"Failed to search compaines"
            }
        }
        const data = await response.json()
        return {
            result:true,
            data:data
        }
    }
    catch(error){
        return{
            result:false,
            message:"Something Went Wrong"
        }
    }

    return {
        searchCompanies
    }
}


export default searchCompanies