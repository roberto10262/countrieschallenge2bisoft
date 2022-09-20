import Head from "next/head";
import Image from "next/image";
import { Box, Stack , Button} from "@mui/material";
import SearchBar from "@/components/home/SearchBar";
import CountriesList from "@/components/home/CountriesList";
import CountriesListHeader from "@/components/home/CountriesListHeader";
import getNativeNames from "@utils/getNativeNames";
export async function getStaticProps() {
  let countries = null;
  try {
    const res = await fetch(`${process.env.API_URL}/all`);
    countries = await res.json();
  } catch (error) {
    console.log(error);
  }

  return { props: { countries } };
}

export default function Home({ countries }) {
  return (
    <>
      <Box>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
        facere obcaecati ea placeat nam laboriosam tempore inventore voluptatem.
        Placeat aperiam a laudantium inventore rem aut, minima expedita rerum
        beatae incidunt.
      </Box>
      <Box
        sx={{
          height: "100vh",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <Box
          sx={{
            height: { xs: 64 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SearchBar />
        </Box>
        <Box
          sx={{
            marginY:2,
            flexDirection: "column",
            flexGrow: 1,
            paddingY:1,
            overflowY: "auto",boxShadow:3
          }}
        >
          <CountriesListHeader />
          <CountriesList countries={countries} />
        </Box>
        <Box sx={{ height: { xs: 64 },display:"flex", flexDirection:"row", justifyContent: "center"}}>
          <Button>Export</Button>
          <Button>Filter</Button>
        </Box>
      </Box>
    </>
  );
}
