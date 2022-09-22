import { getNativeNamesAsArray } from "@utils/getNativeNames";
import { Paper, Stack, Typography, Link, Skeleton, Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";
const CardSize = { width: ["100%", 300], height: 300 };
const CardColors = { background: "none", backdropFilter: "brightness(95%)" };
const Margins = { marginX: [1, 1, 1.4], marginY: [1, 1, 1.4] };
const styles = {
  ...CardSize,
  ...CardColors,
  padding: 2,
  ...Margins,
};

const CountryCard = ({
  country: { name, region, area, subregion, timezones, capital, flag, flags },
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.7 });

  return (
    <Fade
      in={inView}
      style={{ transformOrigin: "0 0 0" }}
      {...(inView ? { timeout: 1000 } : {})}
    >
      <Paper sx={styles} ref={ref} elevation={2}>
        <Stack>
          <Typography fontWeight="bold" textAlign="center">
            {name.common} {flag}
          </Typography>
          <Typography>Capital: {capital}</Typography>
          <Typography>Native Name(s)</Typography>
          {name.nativeName && (
            <>{getNativeNamesAsArray(name.nativeName)?.[0]}</>
          )}
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
    </Fade>
  );
};

export default CountryCard;

export const LoadingCountryCard = () => {
  return (
    <Skeleton
      variant="rounded"
      animation="wave"
      sx={{ ...CardSize, ...CardColors, ...Margins }}
    />
  );
};
