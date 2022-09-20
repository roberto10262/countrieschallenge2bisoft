import { getRegions, getSubRegions } from "@utils/filterDependencies";
import { getNativeNamesAsArray } from "@utils/getNativeNames";
import CountryCard from "@/components/home/CountryCard";
import theme from "src/theme";
import {
  Paper,
  AppBar,
  Toolbar,
  Stack,
  Typography,
  Link,Button,
  Box,
} from "@mui/material";
import SearchBar from "@/components/home/SearchBar";
export async function getStaticProps() {
  let countries = null;
  try {
    const res = await fetch(
      `${process.env.API_URL}/all?fields=name,capital,region,subregion,population,area,timezones,flag,flags`
    );
    countries = await res.json();
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      countries,
      regions: getRegions(countries),
      subRegions: getSubRegions(countries),
    },
  };
}

const Home = ({ countries, regions, subRegions }) => {
  const { name, region, area, subregion, timezones, capital, flag, flags } =
    countries[0];
  console.log(getNativeNamesAsArray(name.nativeName));
  return (
    <>
      <Box>
        <AppBar position="sticky">
          <Toolbar>
            <Stack sx={{ marginLeft: "auto", marginRight: "auto", width:{xs:"100%", md:600} }}>
              <SearchBar countries={countries}/>
              <Stack direction="row" sx={{paddingY:0.5}} spacing={2}>
                <Button variant="contained" color="secondary" size="small">filter</Button>
                <Button variant="contained" color="secondary" size="small">Export</Button>
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {countries.map((country) => (
            <CountryCard country={country} key={country.name.official} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Home;
