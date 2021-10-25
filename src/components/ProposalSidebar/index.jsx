import * as React from 'react';
import {
  Box, Drawer, List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CommentIcon from '@mui/icons-material/Comment';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import HelpIcon from '@mui/icons-material/Help';
import InboxIcon from '@mui/icons-material/Inbox';
import SettingsIcon from '@mui/icons-material/Settings';
import TocIcon from '@mui/icons-material/Toc';
import SidebarButton from '../SidebarButton';

const menuItems = [
  {
    title: 'Übersicht',
    ItemIcon: TocIcon,
  }, {
    title: 'Schreibtisch',
    ItemIcon: DesktopWindowsIcon,
  }, {
    title: 'Mitteilungen',
    ItemIcon: InboxIcon,
  }, {
    title: 'Förderprofil',
    ItemIcon: AccountBoxIcon,
  }, {
    title: 'Einstellungen',
    ItemIcon: SettingsIcon,
  },
];

export default function ProposalSidebar() {
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
        {menuItems.map(({ title, ItemIcon }, index) => (
          <ListItem button key={title}>
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
    <Box display="flex" flexDirection="column" alignItems="flex-end" gap={2}>
      <SidebarButton onClick={setDrawerState(true)} icon={CommentIcon} />
      <SidebarButton onClick={setDrawerState(true)} icon={HelpIcon} />
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={setDrawerState(false)}
      >
        {listItems()}
      </Drawer>
    </Box>
  );
}
