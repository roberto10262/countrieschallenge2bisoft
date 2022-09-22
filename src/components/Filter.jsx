import { useState, useRef } from "react";
import { useCountries } from "context/CountriesContext";
import filter from "@utils/filter";
import { Button } from "@mui/material";
import PopoverMenu from "./PopoverMenu";

const Filter = ({id, anchorEl, open, setOpen}) => {
  const handleClose = () => {
    setOpen((previousOpen) => !previousOpen);
  };
  const {
    filterDependecies: { regions },
    countries,
    setCountries,
  } = useCountries();
  const handleChange = (region) => {
    handleClose();
    filter(region, countries, setCountries, {
      threshold: 0,
      keys: ["region"],
    });
  };
  return (
    <PopoverMenu  anchorEl={anchorEl}
    options={regions}
    open={open}
    id={id}
    handleClose={handleClose}
    handleChange={handleChange}/>
  );
};

export default Filter;
