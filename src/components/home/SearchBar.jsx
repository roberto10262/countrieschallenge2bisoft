import { Paper, TextField, InputAdornment, IconButton } from "@mui/material";
import filter from "@utils/filter";
import Search from "@mui/icons-material/Search";
import { useRef, useState } from "react";
import { useCountries } from "context/CountriesContext";

const SearchBar = () => {
  const { rawCountries: countries, setCountries } = useCountries();
  const [inputValue, setInputValue] = useState("");
  const handleSearch = (searchTerm) => {
    if (searchTerm === "") {
      setCountries(countries);
      return;
    }
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
        width: { xs: "100%", sm: 580 },
      }}
      elevation={4}
    >
      <TextField
        onChange={(event) => {
          let value = event.target.value;
          setInputValue(value);
          handleSearch(value);
        }}
        value={inputValue}
        size="small"
        placeholder="pesquisa"
        fullWidth
        InputProps={{
          type: "search",
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => handleSearch(inputValue)}>
                <Search />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Paper>
  );
};

export default SearchBar;
