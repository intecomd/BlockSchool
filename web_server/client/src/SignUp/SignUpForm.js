import React, {PropTypes} from 'react';
import './SignUpForm.css';

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <div>
  <div className="freeTrialBG">
  </div>
  <div className="signup">
  <div className="container">
    <div className="card-panel signup-panel">
      <form className="col s12" action="/" onSubmit={onSubmit}>
        <h4 className="center-align">Step 1: Parent&#39;s information</h4>

        {errors.summary && <div className="row"><p className="error-message">{errors.summary}</p></div>}
        <div className="row">
          <div className="input-field col s12">
            <input id="parenttName" type="text" name="parenttName" className="validate" onChange={onChange}/>
            <label htmlFor="parenttName">Parent&apos;s Name</label>
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
            <label htmlFor="time">The best call time</label>
          </div>
        </div>

        <h4 className="center-align">Step 2: Child&#39;s information</h4>

        {errors.summary && <div className="row"><p className="error-message">{errors.summary}</p></div>}
        <div className="row">
          <div className="input-field col s12">
            <input id="childtName" type="text" name="childtName" className="validate" onChange={onChange}/>
            <label htmlFor="childtName">Child&apos;s Name</label>
          </div>
        </div>
        {errors.summary && <div className="row"><p className="error-message">{errors.summary}</p></div>}
        <div className="row">
          <div className="input-field col s12">
            <input id="age" type="text" name="age" className="validate" onChange={onChange}/>
            <label htmlFor="age">Child&apos;s age</label>
          </div>
        </div>
        {errors.summary && <div className="row"><p className="error-message">{errors.summary}</p></div>}
        <div className="row">
          <div className="input-field col s12">
            <input id="gender" type="text" name="gender" className="validate" onChange={onChange}/>
            <label htmlFor="gender">Child&apos;s gender</label>
          </div>
        </div>
        {errors.summary && <div className="row"><p className="error-message">{errors.summary}</p></div>}
        <div className="row">
          <div className="input-field col s12">
            <input id="interests" type="text" name="interests" className="validate" onChange={onChange}/>
            <label htmlFor="interests">Child&apos;s interests</label>
          </div>
        </div>

        <h4 className="center-align">Step 3: Sign up</h4>

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
          <input type="submit" className="waves-effect waves-light btn rgb(0,194,177)" value='Free Trial'/>
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
