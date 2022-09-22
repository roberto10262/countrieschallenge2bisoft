import { getNativeNamesAsArray } from "@utils/getNativeNames";
import { Paper, Stack, Typography, Link, Skeleton, Fade, Divider } from "@mui/material";
import { useInView } from "react-intersection-observer";
const CardSize = { width: ["100%", 300], height: 300 };
const CardColors = { background: "none", backdropFilter: "brightness(95%)" };
const Margins = { marginX: [1, 1, 1.4], marginY: [1, 1, 1.4] };
const styles = {
  ...CardSize,
  ...CardColors,
  paddingX: 2,paddingY:4,
  ...Margins,
};

const CountryCard = ({
  country: { name, region, area, subregion, timezones, capital, flag, flags },
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.7 });
  const tagWidth={width:"12ch"}
  return (
    <Fade
      in={inView}
      style={{ transformOrigin: "0 0 0" }}
      {...(inView ? { timeout: 1000 } : {})}
    >
      <Paper sx={styles} ref={ref} elevation={2}>
        <Stack>
          <Typography fontWeight="bold" textAlign="center" gutterBottom>
            {name.common} {flag}
          </Typography>
         <Typography textAlign={"center"} fontStyle="italic" >
         {name.nativeName && (
            <>({getNativeNamesAsArray(name.nativeName)?.[0]})</>
          )}
         </Typography>
         <Typography>Capital: {capital}</Typography>
          <Typography>Região: {region} </Typography>
          <Typography>Sub-região: {subregion} </Typography>
          <Typography>
            Área: {area} Km<sup>2</sup>{" "}
          </Typography>
          <Typography>Fuso horário: {timezones?.[0]} </Typography>
          <Link href={flags.png} sx={{color:"rgb(128,0,0)"}} target="_blank">
            {" "}
            Bandeira
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
