import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';

const dataProtectionText = `Die in der Skizze enthaltenen personenbezogenen Daten und sonstigen Angaben werden vom Empfänger der Skizze und seinen Beauftragten im Rahmen seiner/ihrer Zuständigkeit erhoben, verarbeitet und genutzt.
Eine Weitergabe dieser Daten an andere Stellen richtet sich nach dem Bundesdatenschutzgesetz (BDSG) bzw. diesem vorgehenden Rechtsvorschriften (§1 Abs. 3 BDSG).
Soweit in der Skizze personenbezogene Daten von Beschäftigten des/der Einreichers/in oder sonstigen natürlichen Personen enthalten sind, wurden diese entsprechend den Datenschutzhinweisen informiert und deren Einverständnis eingeholt.`;

const DataProtectionInfo = ({ answer, onChange }) => (
  <div>
    <Typography>{dataProtectionText}</Typography>
    <FormControlLabel
      control={(
        <Checkbox
          checked={answer}
          onChange={({ target: { checked } }) => { onChange(checked); }}
        />
      )}
      label="Ja"
    />
  </div>
);

DataProtectionInfo.propTypes = {
  answer: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DataProtectionInfo;
