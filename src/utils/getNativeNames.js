export default function getNativeNames(nativeName) {
    //console.log(country.name.nativeName)
    if (!nativeName) return
    let properties = Object.getOwnPropertyNames(nativeName)
    let lang = ""
    properties.forEach(property => {
        lang += `${property}: common - ${nativeName[property].common}, official - ${nativeName[property].official}  \n`

    })

    return lang
}

export function getNativeNamesAsArray(nativeName) {
    //console.log(country.name.nativeName)
    if (!nativeName) return
    let properties = Object.getOwnPropertyNames(nativeName)
    let names=[]
    properties.forEach(property => {
        names.push(nativeName[property].common)

    })

    return names
}