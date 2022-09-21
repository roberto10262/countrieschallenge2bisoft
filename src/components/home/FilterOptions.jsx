import {
  Box,
  Stack,
  Button,
  Grow,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import Fuse from "fuse.js";
import filter from "@utils/filter";
const FilterOptions = ({ regions, countriesState }) => {
  const [expand, setExpand] = useState(false);
  const { countries, setCountries } = countriesState;
  let setFilteredCountries;
  const handleChange = (region) =>
    filter(region, countries, setCountries, {
      threshold: 0,
      keys: ["region"],
    });

  return (
    <Stack width={200} direction="row">
      <Button
        size="small"
        variant="outlined"
        color="info"
        onClick={() => setExpand(!expand)}
      >
        Filter
      </Button>
      <Grow in={expand}>
        <FormControl fullWidth>
          <InputLabel id="region-select">Region</InputLabel>
          <Select
            id="region-select"
            label="região"
            color="secondary"
            onChange={(e) => handleChange(e.target.value)}
            defaultValue=""
          >
            {regions.map((region) => (
              <MenuItem key={region} value={region}>
                {region}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grow>
    </Stack>
  );
};

export default FilterOptions;
