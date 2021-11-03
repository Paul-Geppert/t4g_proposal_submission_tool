import * as React from 'react';
import {
  Box, Button, Drawer, List, ListItem, ListItemText,
} from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import { CloseOutlined } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/Inbox';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import TocIcon from '@mui/icons-material/Toc';
import { Link } from 'react-router-dom';
import AppIcon from '../AppIcon';
import SidebarButton from '../SidebarButton';
import theme from '../../theme';

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
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        p={5}
      >
        <AppIcon
          size="large"
          sx={{
            fill: theme.palette.sidebar.content,
            height: '50px',
            width: 'auto',
          }}
        />
        <Box sx={{ flexGrow: 1 }} />
        <Button
          startIcon={<CloseOutlined />}
          sx={{ color: theme.palette.sidebar.content }}
          onClick={setDrawerState(false)}
        />
      </Box>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={setDrawerState(false)}
        onKeyDown={setDrawerState(false)}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <List sx={{ color: 'sidebar.content' }}>
          {menuItems.map(({ title, ItemIcon, target }, index) => (
            <ListItem button key={title} component={Link} to={target}>
              <ListItemText primary={title} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <div>
      <React.Fragment key="left">
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
