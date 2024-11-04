import React from 'react';

const ForgotPassword = () =>
{
    return (
        <>
            <div className="subtitle">Password recovery</div>
            <p className="how-it-works">We will send you a recovery password message via e-mail or phone number you enter down below</p>
            <br/>
            <br/>
                <div className="fill-in-area">
                    <div className="form">
                        <label className="flabel" for="email-or-phone">E-mail or phone number</label>
                        <input className="finput" type="text" id="email-or-phone" name="email-or-phone" />
                        <span className="input-border"></span>
                </div>
                <button className="form-submit"><span class="text">Recover</span><span>See you</span></button>
            </div>
        </>
      );
    };
export default ForgotPassword;