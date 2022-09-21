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

const SearchBar = ({ countries, setCountries }) => {
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
        background: "none",
        flexGrow: 1,
        maxWidth: 620,
      }}
      elevation={4}
    >
      <Autocomplete
        freeSolo={true}
        options={countries.map((option) => option.name.common)}
        renderInput={(params) => (
          <TextField
            {...params}
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
      {/* <TextField
        placeholder="search"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <Search />
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
      /> */}
    </Paper>
  );
};

export default SearchBar;
