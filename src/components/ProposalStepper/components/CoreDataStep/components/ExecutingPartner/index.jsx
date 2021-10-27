import React from 'react';
import {
  FormControl, InputLabel, MenuItem, Select,
} from '@mui/material';
import PropTypes from 'prop-types';

class ExecutingPartner extends React.Component {
  constructor(props) {
    super(props);
    this.updateSelection = this.updateSelection.bind(this);
  }

  updateSelection = (event) => {
    const { onChange } = this.props;
    onChange(event.target.value);
  }

  render() {
    const { partner, availablePartners } = this.props;
    return (
      <FormControl>
        <InputLabel id="demo-simple-select-label">Ausführende Stelle</InputLabel>
        <Select
          value={partner}
          label="Ausführende Stelle"
          onChange={this.updateSelection}
        >
          {
            availablePartners.map((p, i) => (
              <MenuItem key={i} value={p.name}>{p.name}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    );
  }
}

ExecutingPartner.propTypes = {
  availablePartners: PropTypes.array.isRequired,
  partner: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ExecutingPartner;
