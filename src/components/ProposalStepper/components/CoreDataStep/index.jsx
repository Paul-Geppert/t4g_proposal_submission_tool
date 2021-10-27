import {
  Box, Checkbox, FormControlLabel, Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import withStep from '../../HOC/withStep';
import AdditionalPartners from './components/AdditionalPartners';
import ContactInformation from './components/ContactInformation';
import ExecutingPartner from './components/ExecutingPartner';

const dataProtectionText = `Die in der Skizze enthaltenen personenbezogenen Daten und sonstigen Angaben werden vom Empfänger der Skizze und seinen Beauftragten im Rahmen seiner/ihrer Zuständigkeit erhoben, verarbeitet und genutzt.
Eine Weitergabe dieser Daten an andere Stellen richtet sich nach dem Bundesdatenschutzgesetz (BDSG) bzw. diesem vorgehenden Rechtsvorschriften (§1 Abs. 3 BDSG).
Soweit in der Skizze personenbezogene Daten von Beschäftigten des/der Einreichers/in oder sonstigen natürlichen Personen enthalten sind, wurden diese entsprechend den Datenschutzhinweisen informiert und deren Einverständnis eingeholt.`;

// const questions = [{
//   id: 'projectName',
//   xmlElement: '',
//   type: 'text',
//   question: 'Wie lautet der Name des Projekts?',
//   labelTool: 'Projektname',
//   labelPDF: '', // if empty / not existing: use labelTool
//   placeholder: 'Name des Projekts',
//   profileKey: '', // if not empty: get information from profile data
// }, {
//   id: 'proposalCreator',
//   xmlElement: '',
//   type: 'text',
//   question: 'Wie lautet ihr Name?',
//   labelTool: 'Name Skizzenersteller:in',
//   labelPDF: '', // if empty / not existing: use labelTool
//   placeholder: 'Name',
//   profileKey: '', // if not empty: get information from profile data
// }];

class CoreDataStep extends React.Component {
  constructor(props) {
    super(props);
    this.updateInfo = this.updateInfo.bind(this);
  }

  updateInfo = (key) => (value) => {
    const { update } = this.props;
    return update(key)(value);
  };

  render() {
    const {
      proposal: {
        creator, partners, leader, communicationPartner, executor,
      },
    } = this.props;
    return (
      <Box display="flex" flexDirection="column" gap={8}>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography variant="h5">Skizzeneinreicher:in</Typography>
          <ContactInformation person={creator} onChange={this.updateInfo('creator')} />
        </Box>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography variant="h5">Weitere Projektpartner:innen</Typography>
          <AdditionalPartners
            partners={partners}
            onChange={this.updateInfo('partners')}
          />
        </Box>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography variant="h5">Projektkoordination/-Leitung</Typography>
          <ContactInformation person={leader} onChange={this.updateInfo('leader')} />
        </Box>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography variant="h5">Ansprechperson Projektleitung</Typography>
          <ContactInformation person={communicationPartner} onChange={this.updateInfo('communicationPartner')} />
        </Box>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography variant="h5">Ausführende Stelle</Typography>
          {/* <ContactInformation person={executor} onChange={this.updateInfo('executor')} /> */}
          <ExecutingPartner
            availablePartners={partners}
            partner={executor}
            onChange={this.updateInfo('executor')}
          />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="flex-start" gap={2}>
          <Typography variant="h5">Datenschutzhinweis</Typography>
          <Typography>{dataProtectionText}</Typography>
          <FormControlLabel control={<Checkbox />} label="Ja" />
        </Box>
      </Box>
    );
  }
}

CoreDataStep.propTypes = {
  proposal: PropTypes.shape({
    creator: PropTypes.object,
    partners: PropTypes.array,
    leader: PropTypes.object,
    communicationPartner: PropTypes.object,
    executor: PropTypes.string,
  }).isRequired,
  update: PropTypes.func.isRequired,
  // validated: PropTypes.object.isRequired,
};

export default withStep(CoreDataStep);