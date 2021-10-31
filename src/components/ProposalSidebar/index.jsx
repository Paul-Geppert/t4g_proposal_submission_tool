import * as React from 'react';
import {
  Box, Fade, Popper,
} from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import HelpIcon from '@mui/icons-material/Help';
import SidebarButton from '../SidebarButton';
import Contact from './components/Contact';
import Knowledge from './components/Knowledge';

export default function ProposalSidebar() {
  const [isPopperOpen, setIsPopperOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [CurrentContent, setCurrentContent] = React.useState(Contact);
  const placement = 'bottom-end';

  const triggerContactInfo = () => (event) => {
    setCurrentContent(Contact);
    setAnchorEl(event.currentTarget);
    setIsPopperOpen((prev) => !prev);
  };

  const triggerKnowledge = () => (event) => {
    setCurrentContent(Knowledge);
    setAnchorEl(event.currentTarget);
    setIsPopperOpen((prev) => !prev);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-end" gap={2}>
      <Popper
        open={isPopperOpen}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350} sx={{ py: 5 }}>
            <CurrentContent />
          </Fade>
        )}
      </Popper>
      <SidebarButton onClick={triggerKnowledge()} icon={CommentIcon} />
      <SidebarButton onClick={triggerContactInfo()} icon={HelpIcon} />
    </Box>
  );
}
