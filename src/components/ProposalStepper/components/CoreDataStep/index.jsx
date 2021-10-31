import {
  Box, Button, Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import withStep from '../../HOC/withStep';
import AdditionalPartners from './components/AdditionalPartners';
import ContactInformation from './components/ContactInformation';
import DataProtectionInfo from './components/ContactInformation/components/DataProtection';
import ExecutingPartner from './components/ExecutingPartner';

class CoreDataStep extends React.Component {
  constructor(props) {
    super(props);
    this.updateInfo = this.updateInfo.bind(this);
    this.copyFromProfile = this.copyFromProfile.bind(this);
  }

  updateInfo = (key) => (value) => {
    const { update } = this.props;
    return update(key)(value);
  };

  copyFromProfile = () => {
    this.updateInfo('creator')({
      city: 'Musterhausen',
      country: 'Deutschland',
      faxNumber: '',
      houseNumber: '1',
      mailAddress: 'anna@antragstellerin.de',
      name: 'Innova Startup',
      phoneNumber: '+49123/456789',
      street: 'Musterstraße',
      webAddress: '',
      zipCode: '10001',
    });
  }

  setExampleDataLeader = () => {
    this.updateInfo('leader')({
      city: 'Koordinationsstadt',
      country: 'Deutschland',
      faxNumber: '',
      houseNumber: '17',
      mailAddress: 'projekt@leitung.de',
      name: 'Projektmanagement GmbH',
      phoneNumber: '+49 178 1957234',
      street: 'Koordstraße',
      webAddress: '',
      zipCode: '10001',
    });
  }

  setExampleDataCommunicationPartner = () => {
    this.updateInfo('communicationPartner')({
      city: 'Kommunikationsstadt',
      country: 'Deutschland',
      faxNumber: '',
      houseNumber: '33',
      mailAddress: 'projekt@kommunikation.de',
      name: 'Ina Müller',
      phoneNumber: '+49 178 1957237',
      street: 'Kommunikationsstraße',
      webAddress: '',
      zipCode: '10002',
    });
  }

  render() {
    const {
      proposal: {
        creator, partners, leader, communicationPartner, executor, dataProtection,
      },
      validated,
    } = this.props;
    return (
      <Box display="flex" flexDirection="column" gap={8}>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h5">Skizzeneinreicher:in</Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => this.copyFromProfile()}
            >
              Aus Profil übernehmen
            </Button>
          </Box>
          <ContactInformation
            person={creator}
            onChange={this.updateInfo('creator')}
            validated={validated.creator}
          />
        </Box>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography variant="h5">Weitere Projektpartner:innen</Typography>
          <AdditionalPartners
            partners={partners}
            onChange={this.updateInfo('partners')}
            validated={validated.partners}
          />
        </Box>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h5">Projektkoordination/-Leitung</Typography>
            <Button
              variant="contained"
              onClick={() => this.setExampleDataLeader()}
              sx={{ backgroundColor: 'red' }}
            >
              Beispieldaten einfügen
            </Button>
          </Box>
          <ContactInformation
            person={leader}
            onChange={this.updateInfo('leader')}
            validated={validated.leader}
          />
        </Box>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h5">Ansprechperson Projektleitung</Typography>
            <Button
              variant="contained"
              onClick={() => this.setExampleDataCommunicationPartner()}
              sx={{ backgroundColor: 'red' }}
            >
              Beispieldaten einfügen
            </Button>
          </Box>
          <ContactInformation
            person={communicationPartner}
            onChange={this.updateInfo('communicationPartner')}
            validated={validated.communicationPartner}
          />
        </Box>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography variant="h5">Ausführende Stelle</Typography>
          {
            partners.length === 0 && !creator.name && (
              <Typography variant="body2">Füllen Sie zunächst die Angaben über Skizzeneinreicher:in und Weitere Projektpartner:innen aus. Im Anschluss können Sie sie in der Liste auswählen.</Typography>
            )
          }
          <ExecutingPartner
            availablePartners={partners.concat([creator])}
            partner={executor}
            onChange={this.updateInfo('executor')}
          />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="flex-start" gap={2}>
          <Typography variant="h5">Datenschutzhinweis</Typography>
          <DataProtectionInfo
            answer={dataProtection}
            onChange={this.updateInfo('dataProtection')}
          />
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
    dataProtection: PropTypes.bool,
  }).isRequired,
  update: PropTypes.func.isRequired,
  validated: PropTypes.object.isRequired,
};

export default withStep(CoreDataStep);
