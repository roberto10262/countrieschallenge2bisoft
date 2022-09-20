export const getRegions = (countries) => {
    let regions = [];
    countries.forEach((country) => {
        if (!regions.find((region) => region === country.region))
            regions.push(country.region);
    });
    return regions;
};

export const getSubRegions = (countries) => {
    let subRegions = [];
    countries.forEach((country) => {
        if (!subRegions.find((subregion) => subregion === country.subregion ))
            subRegions.push(country.subregion);
    });
    return subRegions.filter(subregion => subregion!=="");
};
