import React from 'react';
import { FormControl, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import TextQuestion from '../../../TextQuestion';

class ContactInformation extends React.Component {
  constructor(props) {
    super(props);
    this.updatePersonalData = this.updatePersonalData.bind(this);
  }

  updatePersonalData = (key) => (value) => {
    const { onChange } = this.props;
    onChange({ [key]: value });
  };

  render() {
    const {
      person: {
        city = '',
        country = 'Deutschland',
        faxNumber = '',
        houseNumber = '',
        mailAddress = '',
        name = '',
        phoneNumber = '',
        street = '',
        webAddress = '',
        zipCode = '',
      },
    } = this.props;

    return (
      <FormControl>
        <Grid container>
          <Grid item xs={12}>
            <TextQuestion
              id=""
              question="Rechtsverbindlicher Name"
              label=""
              internalQuestionName=""
              placeholder="z.B. DigitalSerivce4Germany GmbH"
              answer={name}
              onChange={this.updatePersonalData('name')}
              validated
            />
          </Grid>
          <Grid item xs={9} sx={{ pr: 2 }}>
            <TextQuestion
              id=""
              question="Straße"
              label=""
              internalQuestionName=""
              placeholder="Straße"
              answer={street}
              onChange={this.updatePersonalData('street')}
              validated
            />
          </Grid>
          <Grid item xs={3}>
            <TextQuestion
              id=""
              question="Hausnummer"
              label=""
              internalQuestionName=""
              placeholder="Hausnummer"
              answer={houseNumber}
              onChange={this.updatePersonalData('houseNumber')}
              validated
            />
          </Grid>
          <Grid item xs={3} sx={{ pr: 2 }}>
            <TextQuestion
              id=""
              question="Postleitzahl"
              label=""
              internalQuestionName=""
              placeholder="Postleitzahl"
              answer={zipCode}
              onChange={this.updatePersonalData('zipCode')}
              validated
            />
          </Grid>
          <Grid item xs={9}>
            <TextQuestion
              id=""
              question="Ort"
              label=""
              internalQuestionName=""
              placeholder="Ort"
              answer={city}
              onChange={this.updatePersonalData('city')}
              validated
            />
          </Grid>
          <Grid item xs={4}>
            <TextQuestion
              id=""
              question="Land"
              label=""
              internalQuestionName=""
              placeholder="Land"
              answer={country}
              onChange={this.updatePersonalData('country')}
              validated
            />
          </Grid>
          <Grid item xs={8} />
          <Grid item xs={6} sx={{ pr: 2 }}>
            <TextQuestion
              id=""
              question="Telefonnummer"
              label=""
              internalQuestionName=""
              placeholder="Telefonnummer"
              answer={phoneNumber}
              onChange={this.updatePersonalData('phoneNumber')}
              validated
            />
          </Grid>
          <Grid item xs={6}>
            <TextQuestion
              id=""
              question="Faxnummer"
              label=""
              internalQuestionName=""
              placeholder="Faxnummer"
              answer={faxNumber}
              onChange={this.updatePersonalData('faxNumber')}
              validated
            />
          </Grid>
          <Grid item xs={6} sx={{ pr: 2 }}>
            <TextQuestion
              id=""
              question="E-Mail-Adresse"
              label=""
              internalQuestionName=""
              placeholder="E-Mail-Adresse"
              answer={mailAddress}
              onChange={this.updatePersonalData('mailAddress')}
              validated
            />
          </Grid>
          <Grid item xs={6}>
            <TextQuestion
              id=""
              question="Web-Adresse"
              label=""
              internalQuestionName=""
              placeholder="Web-Adresse"
              answer={webAddress}
              onChange={this.updatePersonalData('webAddress')}
              validated
            />
          </Grid>
        </Grid>
      </FormControl>
    );
  }
}

ContactInformation.propTypes = {
  person: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContactInformation;
