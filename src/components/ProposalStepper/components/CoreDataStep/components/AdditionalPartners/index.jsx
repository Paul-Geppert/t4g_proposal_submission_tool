import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { merge } from 'lodash';
import PropTypes from 'prop-types';

import ContactInformation from '../ContactInformation';

class AdditionalPartners extends React.Component {
  constructor(props) {
    super(props);
    this.addPartner = this.addPartner.bind(this);
    this.updatePartner = this.updatePartner.bind(this);
    this.removePartner = this.removePartner.bind(this);
  }

  addPartner = () => {
    const { partners, onChange } = this.props;
    partners.push({});
    onChange(partners);
  }

  updatePartner = (i) => (value) => {
    const { partners, onChange } = this.props;
    const nextPartner = { ...partners[i] };
    merge(nextPartner, value);
    partners[i] = nextPartner;
    onChange(partners);
  }

  removePartner = (i) => {
    const { partners, onChange } = this.props;
    if (partners.length === 0) {
      return;
    }
    partners.splice(i, 1);
    onChange(partners);
  }

  render() {
    const { partners } = this.props;
    return (
      <Box display="flex" flexDirection="column">
        <Button onClick={this.addPartner}>+ Partner hinzufügen</Button>
        <Box display="flex" flexDirection="column" sx={{ px: '10%' }} gap={3}>
          {
            partners.map((partner, i) => (
              <Box key={i}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h5">
                    Partner
                    {' '}
                    {i + 1}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => this.removePartner(i)}
                  >
                    Löschen
                  </Button>
                </Box>
                <ContactInformation
                  person={partner}
                  onChange={this.updatePartner(i)}
                />
              </Box>
            ))
          }
        </Box>
      </Box>
    );
  }
}

AdditionalPartners.propTypes = {
  partners: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdditionalPartners;
