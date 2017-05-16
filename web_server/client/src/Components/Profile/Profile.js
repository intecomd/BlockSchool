import React, {PropTypes} from 'react';

// import Auth from '../../Auth/Auth';

class Profile extends React.Component {

  render() {
    return (
      <div>
        <h1>Profile Page</h1>
      </div>
    );
  }
}

// To make react-router work
Profile.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Profile;
