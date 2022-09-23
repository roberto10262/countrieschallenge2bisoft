import { useState, useRef, Fragment } from "react";
import { useCountries } from "context/CountriesContext";
import filter from "@utils/filter";
import { ButtonGroup, Button } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import PopoverMenu from "./PopoverMenu";
import Filter from "./Filter";
import Export from "./Export";
const ToolbarControls = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const filterButtonRef = useRef();
  const filterButtonid = "buttonFilter";
  const [openExport, setOpenExport] = useState(false);
  const exportButtonRef = useRef();
  const exportButtonid = "buttonFilter";
  const {
    filterDependecies: { regions },
    countries,
    setCountries,
  } = useCountries();

  const handleClick = () => {
    setOpenFilter((previousOpenFilter) => !previousOpenFilter);
  };
  const handleExport = () => {
    setOpenExport((previousOpenExport) => !previousOpenExport);
  };

  return (
    <Fragment>
      <ButtonGroup variant="contained">
        <Button
          color="secondary"
          aria-describedby={filterButtonid}
          onClick={handleClick}
          ref={filterButtonRef}
        >
          Exportar
        </Button>
        <Button
          color="secondary"
          ref={exportButtonRef}
          aria-describedby={exportButtonid}
          onClick={handleExport}
          endIcon={<ArrowDropDown />}
        >
          Filtrar
          
        </Button>
      </ButtonGroup>
      <Filter
        id={exportButtonid}
        anchorEl={exportButtonRef.current}
        setOpen={setOpenExport}
        open={openExport}
      />
      <Export
        id={filterButtonid}
        anchorEl={filterButtonRef.current}
        setOpen={setOpenFilter}
        open={openFilter}
      />
    </Fragment>
  );
};

export default ToolbarControls;
