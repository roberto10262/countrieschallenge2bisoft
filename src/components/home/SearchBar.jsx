import { Paper, TextField, InputAdornment, IconButton } from "@mui/material";
import Search from "@mui/icons-material/Search"
const SearchBar = () => {
  return (
    <Paper sx={{background:"none", flexGrow:1, maxWidth:620}}>
      <TextField
      placeholder="search"
        InputProps={{
          endAdornment: <InputAdornment position="end"><IconButton>
              <Search/>
              </IconButton></InputAdornment>,
        }}
        fullWidth
      />
    </Paper>
  );
};

export default SearchBar;
