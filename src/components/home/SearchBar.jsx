import {
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  Autocomplete,
} from "@mui/material";
import Search from "@mui/icons-material/Search";
const SearchBar = ({ countries }) => {
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
            placeholder="search" fullWidth
            InputProps={{
              ...params.InputProps,
              type: "search",
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
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
