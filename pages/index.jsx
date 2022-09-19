import Head from "next/head";
import Image from "next/image";
import { Box } from "@mui/material";
import SearchBar from "@/components/home/SearchBar";
import CountriesList from "@/components/home/CountriesList";
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
  console.log(countries);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <SearchBar />
      </Box>
      <CountriesList />
    </>
  );
}
