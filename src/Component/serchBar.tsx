import * as React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { TSearchBarProps, ISearchBarEvents } from "../types/PixelApi";

export const SearchBar: React.FC<TSearchBarProps & ISearchBarEvents> = (
  props
) => {
  return (
    <div>
      <TextField
        label="Search"
        value={props.searchText}
        style={{ marginTop: 8 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        helperText="Start typing search string"
        fullWidth
        onChange={(e) => props.onSearchTextChange(e.target.value)}
      />
    </div>
  );
};
