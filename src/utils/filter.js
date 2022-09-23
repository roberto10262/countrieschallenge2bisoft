import Fuse from "fuse.js"

const filter = (searchTerm, countries, setCountries, options) => {
    
    const fuse = new Fuse(countries, options)
    const searchResults = fuse.search(searchTerm)

    setCountries(searchResults.map(item => item.item))
}

export default filter