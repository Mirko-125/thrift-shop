import React from 'react';

const SignInFill = () =>
{

    return (
        <>
            <div className="subtitle">Signing in
            </div>
            <br/>
            <br/>
            <div className="buttons">
                <div className="fill-in-area">
                    <div className="form">
                        <label className="flabel" for="email-or-phone">E-mail or phone number</label>
                        <input type="text" id="email-or-phone" name="email-or-phone" />
                        <span className="input-border"></span>
                    </div>
                    <div className="form">
                        <label className="flabel" for="passphrase">Password</label>
                        <input type="password" id="passphrase" name="passphrase" />
                        <span className="input-border"></span>
                    </div>
                    <br />
                    <button className="form-submit"><span class="text">Sign in</span><span>Welcome</span></button>
                </div>
                <div className="infopult">
                    <a className="sign-in-options" onClick={()=>console.log("sada se otvara novi render")}>
                        Registration
                    </a>
                    <div className="sign-in-options" onClick={()=>console.log("i za ovo")}>
                        Forgot password?
                    </div>
                </div>
            </div>
        </>
      );
    };
    // I should make it so that when the user clicks on the Registration or Forgot password? links,
    // the SlidingWindow component renders the appropriate content or components,... huh.
export default SignInFill;