import {
    getNativeNamesAsArray
} from "@utils/getNativeNames"
import downloadBlob from "./downloadBlob"

const toXLS = (countries) => {
    const xlsString = `<html><head><meta charset="UTF-8"/></head ><body><table><thead>
    <th><b>nome</b></th><th><b>nomeNativo</b></th><th><b>capital</b></th><th><b>regiao</b></th><th><b>subRegiao</b></th><th><b>populacao</b></th><th><b>fusoHorario</b></th><th><b>linkBandeira</b></th><th><b>area</b></th></tr></thead> <tbody>`
    countries.forEach(country => {
        let row = `<tr>
            <td>${country.name.common}</td>
            <td>${getNativeNamesAsArray(country.name.nativeName)?.[0]}</td>
            <td>${country.capital}</td>
            <td>${country.region}</td>
            <td>${country.subregion}</td>
            <td>${country.population}</td>
            <td>${country.timezones?.[0]}</td>
            <td>${country.flags.png}</td>
            <td>${country.area}</td>
        </tr>`
        xlsString+=row
    })
    xlsString+=`</tbody></table></body></html >`

    console.log(xlsString)
    downloadBlob(xlsString, "paises.xls","application/vnd.ms-excel")

}

export default toXLS