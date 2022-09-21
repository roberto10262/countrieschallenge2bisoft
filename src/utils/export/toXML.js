import {
    getNativeNamesAsArray
} from "@utils/getNativeNames"
import downloadBlob from "./downloadBlob"

const toXML = (countries) => {
    const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
    <paises>`

    countries.forEach(country => {
        let row = `<pais>
            <nome>${country.name.official}</nome>
            <nomeNativo>${getNativeNamesAsArray(country.name.nativeName)?.[0]}</nomeNativo>
            <capital>${country.capital}</capital>
            <regiao>${country.region}</regiao>
            <subRegiao>${country.subregion}</subRegiao>
            <populacao>${country.population}</populacao>
            <fusoHorario>${country.timezones?.[0]}</fusoHorario>
            <linkBandeira>${country.flags.png}</linkBandeira>
            <area>${country.area}</area></pais>`
        xmlString += row
    })
    xmlString += `</paises>`
    downloadBlob(xmlString, "paises.xml", "application/xml")

}

export default toXML