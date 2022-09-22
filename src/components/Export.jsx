import { useState, useRef } from "react";
import { useCountries } from "context/CountriesContext";
import filter from "@utils/filter";
import { Button } from "@mui/material";
import PopoverMenu from "./PopoverMenu";
import toCSV from "@utils/export/toCSV";
import toXLS from "@utils/export/toXLS";
import toXML from "@utils/export/toXML";

const Export = ({ id, anchorEl, open, setOpen }) => {
  const handleClose = () => {
    setOpen((previousOpen) => !previousOpen);
  };
  const { countries } = useCountries();
  const handleChange = (format) => {
    handleClose();
    if (format === "CSV") toCSV(countries);
    if (format === "XLS") toXLS(countries);
    toXML(countries);
  };
  return (
    <PopoverMenu
      anchorEl={anchorEl}
      options={["CSV", "XLS", "XML"]}
      open={open}
      id={id}
      handleClose={handleClose}
      handleChange={handleChange}
    />
  );
};

export default Export;
