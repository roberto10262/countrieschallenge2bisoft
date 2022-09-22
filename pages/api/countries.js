import {
  getSubRegions,
  getRegions
} from "@utils/filterDependencies";

export default async function handler(req, res) {
  let countries = null;
  let regions = []
  let subRegions = []
  try {
    const response = await fetch(
      `${process.env.API_URL}/all?fields=name,capital,region,subregion,population,area,timezones,flag,flags`
    );
    countries = await response.json();
    regions = getRegions(countries)
    subRegions = getSubRegions(countries)
  } catch (error) {
    res.status(500).end()
  }
  res.json({
    countries,
    regions,
    subRegions
  })
}