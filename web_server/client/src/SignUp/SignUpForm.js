import React, {PropTypes} from 'react';
import './SignUpForm.css';

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <div>
  <div id="background1">
  </div>
  <div className="signup">
  <div className="container">
    <div className="card-panel signup-panel">
      <form className="col s12" action="/" onSubmit={onSubmit}>
        <h4 className="center-align">Free Trial Sign Up</h4>
        {errors.summary && <div className="row"><p className="error-message">{errors.summary}</p></div>}
        <div className="row">
          <div className="input-field col s12">
            <input id="firstName" type="text" name="firstName" className="validate" onChange={onChange}/>
            <label htmlFor="firstName">Parent&apos;s First Name</label>
          </div>
        </div>
        {errors.summary && <div className="row"><p className="error-message">{errors.summary}</p></div>}
        <div className="row">
          <div className="input-field col s12">
            <input id="lastName" type="text" name="lastName" className="validate" onChange={onChange}/>
            <label htmlFor="lastName">Parent&apos;s Last Name</label>
          </div>
        </div>
        {errors.summary && <div className="row"><p className="error-message">{errors.summary}</p></div>}
        <div className="row">
          <div className="input-field col s12">
            <input id="phone" type="text" name="phone" className="validate" onChange={onChange}/>
            <label htmlFor="phone">Phone Number</label>
          </div>
        </div>
        {errors.summary && <div className="row"><p className="error-message">{errors.summary}</p></div>}
        <div className="row">
          <div className="input-field col s12">
            <input id="time" type="text" name="time" className="validate" onChange={onChange}/>
            <label htmlFor="time">Best Contact Time</label>
          </div>
        </div>

        {errors.summary && <div className="row"><p className="error-message">{errors.summary}</p></div>}
        <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" name="email" className="validate" onChange={onChange}/>
            <label htmlFor="email">Email</label>
          </div>
        </div>
        {errors.email && <div className="row"><p className="error-message">{errors.email}</p></div>}
        <div className="row">
          <div className="input-field col s12">
            <input id="password" type="password" name="password" className="validate" onChange={onChange}/>
            <label htmlFor="password">Password</label>
          </div>
        </div>
        {errors.password && <div className="row"><p className="error-message">{errors.password}</p></div>}
        <div className="row">
          <div className="input-field col s12">
            <input id="confirm_password" type="password" name="confirm_password" className="validate" onChange={onChange}/>
            <label htmlFor="confirm_password">Conform Password</label>
          </div>
        </div>
        <div className="row right-align">
          <input type="submit" className="waves-effect waves-light btn cyan lighten-3" value='Sign Up'/>
        </div>
      </form>
    </div>
  </div>
  </div>
  </div>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
