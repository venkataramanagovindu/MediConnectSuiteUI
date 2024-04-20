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
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
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
