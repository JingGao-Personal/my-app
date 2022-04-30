/* eslint-disable object-curly-newline */
/* eslint-disable react/button-has-type */
/* eslint-disable quotes */
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
export default function SearchForm(props) {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 360 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search movies"
        inputProps={{ "aria-label": "search movies" }}
        data-testid="search-input-field"
        value={props.inputValue ?? ""}
        onChange={(e) => props.setInputValue(e.target.value)}
      />
      <IconButton
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={() => {
          props.search();
        }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
