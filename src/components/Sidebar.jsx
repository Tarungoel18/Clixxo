// Sidebar.js (refactored with map function)
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {SIDEBAR_SECTIONS }from "../constants/sidebarConstants";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({
    operationInfo: false,
    sip: false,
    pcm: false,
    isdn: false,
    fax: false,
    route: false,
    numberFilter: false,
    manipulate: false,
    vpn: false,
    dhcp: false,
    systemTools: false,
  });

  const handleToggle = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const renderSubmenuItems = (submenuItems) => {
    return submenuItems.map((item) => (
      <ListItem key={item.id} button sx={{ pl: 4 }} className="cursor-pointer">
        <ListItemIcon>
          <FiberManualRecordIcon sx={{ fontSize: 8 }} />
        </ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItem>
    ));
  };

  const renderSidebarSection = (section) => {
    const IconComponent = section.icon;

    return (
      <React.Fragment key={section.id}>
        <ListItem
          button
          onClick={() => handleToggle(section.id)}
          className="cursor-pointer"
        >
          <ListItemIcon>
            <IconComponent />
          </ListItemIcon>
          <ListItemText primary={section.title} />
          {section.hasSubmenu &&
            (openSections[section.id] ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>

        {section.hasSubmenu && (
          <Collapse in={openSections[section.id]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {renderSubmenuItems(section.submenuItems)}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    );
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          top: "80px",
          height: "calc(100% - 80px)",
        },
      }}
    >
      <div role="presentation">
        <List>{SIDEBAR_SECTIONS.map(renderSidebarSection)}</List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
