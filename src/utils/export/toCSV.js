import downloadBlob from "./downloadBlob"

const {
    getNativeNamesAsArray
} = require("@utils/getNativeNames")


const toCSV = (countries) => {
    const csvString = "nome,nomeNativo,capital,regiao,subRegiao,area,fusoHorario,populacao,linkBandeira\n"
    countries.forEach(country => {
        let row = `"${country.name.official}","${getNativeNamesAsArray(country.name.nativeName)?.[0]}", "${country.capital}","${country.region}","${country.subregion}","${country.area}","${country.timezones?.[0]}","${country.population}","${country.flags.png}"\n`
        csvString += row
    })
    console.log(csvString)
    downloadBlob(csvString,"paises.csv", 'text/csv;charset=utf-8;')

}
export default toCSV