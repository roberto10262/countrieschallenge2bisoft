import {
  Popper,
  MenuList,
  MenuItem,
  Paper,
  Fade,
  ClickAwayListener,
} from "@mui/material";
const PopoverMenu = ({
  options,
  id,
  open,
  anchorEl,
  handleClose,
  handleChange,
}) => {
  return (
    <Popper
      id={id}
      open={open}
      anchorEl={anchorEl}
      transition
      sx={{ zIndex: 1500 }}
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper sx={{ border: 1, p: 1 }}>
            <ClickAwayListener onClickAway={()=>handleClose()} touchEvent="onTouchStart">
              <MenuList>
                {options.map((option) => (
                  <MenuItem key={option} onClick={() => handleChange(option)}>
                    {option}
                  </MenuItem>
                ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
};

export default PopoverMenu;
