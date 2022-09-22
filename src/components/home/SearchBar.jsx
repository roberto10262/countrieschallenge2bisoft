import {
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  Autocomplete,
} from "@mui/material";
import filter from "@utils/filter";
import Search from "@mui/icons-material/Search";
import { useRef } from "react";
import { useCountries } from "context/CountriesContext";

const SearchBar = () => {
  const { countries, setCountries, isLoading } = useCountries();
  const searchFieldref = useRef();
  const handleSearch = (target) => {
    const searchTerm = target.firstChild.value;
    filter(searchTerm, countries, setCountries, {
      keys: [
        ["name", "common"],
        [, "name", "official"],
      ],
    });
  };

  return (
    <Paper
      sx={{
        background: "#fafafa",
        flexGrow: 1,
        width:{xs:"100%", sm:580}
      }}
      elevation={4}
    >
      <Autocomplete
        freeSolo={true}
        options={
          isLoading ? [] : countries.map((option) => option.name.common)
        }
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            ref={searchFieldref}
            placeholder="search"
            fullWidth
            InputProps={{
              ...params.InputProps,
              type: "search",
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      handleSearch(searchFieldref.current.firstChild)
                    }
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </Paper>
  );
};

export default SearchBar;
