export default function getNativeNames(country){
    //console.log(country.name.nativeName)
    let prop =Object.getOwnPropertyNames(country.name.nativeName)
    let lang = country.name.nativeName["bul"]
    console.log(prop, lang)
}