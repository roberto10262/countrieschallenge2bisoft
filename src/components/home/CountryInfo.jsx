import { Box, Typography, Stack, Collapse, Button, Divider } from "@mui/material";
import getNativeNames from "@utils/getNativeNames";
import { useState } from "react";
const CountryInfo = ({ country }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    name,
    capital,
    region,
    subregion,
    area,
    population,
    flag,
    flags,
    timezones,
  } = country;
  const expand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box sx={{ paddingTop: 1, paddingX:1 }}>
      <Stack direction="row" flexgrow={1}>
        <Typography sx={{ width: { xs: "50%", sm: "50%" } }}>
          {name.common}
        </Typography>
        <Typography sx={{ width: { xs: "40%", sm: "30%" } }}>
          {capital?.[0]}
        </Typography>
        <Typography
          sx={{ display: { xs: "none", sm: "inline-flex", width: "10%" } }}
        >
          {region}
        </Typography>
        <Button onClick={() => expand()} sx={{zIndex:0}}>
          {!isExpanded && "more"} {isExpanded && "less"}
        </Button>
      </Stack>
      <Collapse in={isExpanded} sx={{ textAlign: "center" }}>
          <Divider/>
        <Typography>SubRegion: {subregion}</Typography>
        <Typography>Area: {area}</Typography>
        <Typography>Timezone: {timezones[0]}</Typography>
        <Typography>
          Native Name
          <br /> {getNativeNames(name.nativeName)}{" "}
        </Typography>
        <Typography>Population: {population}</Typography>
        <Typography>{flag}</Typography>
      </Collapse>
    </Box>
  );
};

export default CountryInfo;
