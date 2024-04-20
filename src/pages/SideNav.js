import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import HistoryIcon from "@mui/icons-material/History";

const navItems = [
  {
    name: "Appointments",
  },
  {
    name: "Vitals",
  },
  {
    name: "History",
  },
];

const SideNav = React.forwardRef((props, ref) => {
  const [isDrawerOpened, setIsDrawerOpened] = React.useState(false);
  React.useImperativeHandle(ref, () => ({
    toggleDrawer,
  }));

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map((navItem, index) => (
          <ListItem key={navItem} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {navItem.name == "Appointments" && <CalendarMonthIcon />}
                {navItem.name == "Vitals" && <HealthAndSafetyIcon />}
                {navItem.name == "History" && <HistoryIcon />}
              </ListItemIcon>
              <ListItemText primary={navItem.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const toggleDrawer = (open) => (open) => {
    // if (
    //   event &&
    //   event.type === "keydown" &&
    //   (event.key === "Tab" || event.key === "Shift")
    // ) {
    //   return;
    // }
    // console.log(open);
    setIsDrawerOpened(open);
    // console.log(open);
  };

  return (
    <SwipeableDrawer
      anchor="left"
      open={isDrawerOpened}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(false)}
    >
      {list()}
    </SwipeableDrawer>
  );
});

export default SideNav;
