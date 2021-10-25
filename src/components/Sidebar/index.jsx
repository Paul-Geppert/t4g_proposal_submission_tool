import * as React from 'react';
import {
  Box, Drawer, List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import InboxIcon from '@mui/icons-material/Inbox';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import TocIcon from '@mui/icons-material/Toc';
import { Link } from 'react-router-dom';
import SidebarButton from '../SidebarButton';

const menuItems = [
  {
    title: 'Übersicht',
    ItemIcon: TocIcon,
    target: '/',
  }, {
    title: 'Schreibtisch',
    ItemIcon: DesktopWindowsIcon,
    target: '/proposals/create/',
  }, {
    title: 'Mitteilungen',
    ItemIcon: InboxIcon,
    target: '/',
  }, {
    title: 'Förderprofil',
    ItemIcon: AccountBoxIcon,
    target: '/',
  }, {
    title: 'Einstellungen',
    ItemIcon: SettingsIcon,
    target: '/',
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const setDrawerState = (newState) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsOpen(newState);
  };

  const listItems = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={setDrawerState(false)}
      onKeyDown={setDrawerState(false)}
    >
      <List>
        {menuItems.map(({ title, ItemIcon, target }, index) => (
          <ListItem button key={title} component={Link} to={target}>
            <ListItemIcon>
              <ItemIcon />
            </ListItemIcon>
            <ListItemText primary={title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key="left">
        {/* <Button onClick={setDrawerState(true)}>
          <MenuIcon />
        </Button> */}
        <SidebarButton onClick={setDrawerState(true)} icon={MenuIcon} />
        <Drawer
          anchor="left"
          open={isOpen}
          onClose={setDrawerState(false)}
        >
          {listItems()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
