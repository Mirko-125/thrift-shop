import React from 'react';

const Registration = () =>
{
    return (
        <>
            <div className="subtitle">Registration</div>
                <div className="fill-in-area">
                    <div className="form">
                        <label className="flabel" for="name">Full name</label>
                        <input className="finput" type="text" id="name" name="name" />
                        <span className="input-border"></span>
                    </div>
                    <div className="form">
                        <label className="flabel" for="email">E-mail</label>
                        <input className="finput" type="text" id="email" name="email" />
                        <span className="input-border"></span>
                    </div>
                    <div className="form">
                        <label className="flabel" for="phone">Phone number</label>
                        <input className="finput" type="text" id="phone" name="phone" />
                        <span className="input-border"></span>
                    </div>
                    <div className="form">
                        <label className="flabel" for="passphrase">Password</label>
                        <input className="finput" type="password" id="passphrase" name="passphrase" />
                        <span className="input-border"></span>
                    </div>
                    <div className="form">
                        <label className="flabel" for="c_passphrase">Confirm password</label>
                        <input className="finput" type="password" id="c_passphrase" name="c_passphrase" />
                        <span className="input-border"></span>
                    </div>
                    <br />
                    <button className="form-submit"><span class="text">Register</span><span>Hello</span></button>
                    <br />
                    <br />
            </div>
        </>
      );
    };
export default Registration;