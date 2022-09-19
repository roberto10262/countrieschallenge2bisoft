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