import React, {PropTypes} from 'react';

import Auth from '../Auth/Auth';
import ReferralForm from './ReferralForm';


class ReferralPage extends React.Component {


  render() {
    return (
      <ReferralForm
      />
    );
  }
}

// To make react-router work
ReferralPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default ReferralPage;
