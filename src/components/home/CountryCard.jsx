import { getNativeNamesAsArray } from "@utils/getNativeNames";
import { Paper, Stack, Typography, Link } from "@mui/material";

const CountryCard = ({ country }) => {
  const { name, region, area, subregion, timezones, capital, flag, flags } =
    country;

  return (
    <Paper
      sx={{
        background: "none",
        width: ["100%", 300],
        padding: 2,
        marginX: [0, 1, 1.4],
        marginY: [1, 1, 1.4],
        backdropFilter:"brightness(95%)"
    }}
      elevation={2}
    >
      <Stack>
        <Typography fontWeight="bold" textAlign="center">
          {name.common} {flag}
        </Typography>
        <Typography>Capital: {capital}</Typography>
        <Typography>Native Name(s)</Typography>
        {name.nativeName && <>{getNativeNamesAsArray(name.nativeName)?.[0]}</>}
        <Typography>Region: {region} </Typography>
        <Typography>Subregion: {subregion} </Typography>
        <Typography>
          Area: {area} Km<sup>2</sup>{" "}
        </Typography>
        <Typography>Timezone: {timezones?.[0]} </Typography>
        <Link href={flags.png} target="_blank">
          {" "}
          flag
        </Link>
      </Stack>
    </Paper>
  );
};

export default CountryCard;
