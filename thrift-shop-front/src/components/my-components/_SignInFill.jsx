import React, { useState, Suspense, lazy } from 'react';

const Registration = lazy(() => import('./__Registration.jsx'));
const ForgotPassword = lazy(() => import('./__ForgotPassword.jsx'));

const ComponentMap =
{
    "Registration": Registration,
    "ForgotPassword": ForgotPassword,
}

const SignInFill = () =>
{
    const [isChosen, setChoice] = useState(null);

    const ComponentToRender = ComponentMap[isChosen] || null;

    const handleChoice = (choice) => 
    {
        setChoice(choice);
        console.log("Choice is: ", choice);
    };

    const handleReturn = () => 
    {
        setChoice(null);
    };

    return (
        <>
            <Suspense fallback={<div className="please-wait">Loading...</div>}>
                {ComponentToRender ? 
                (
                    <>
                        <div className="buttons">
                            <ComponentToRender />
                            <div className="infopult">
                                <a className="sign-in-options" onClick={()=>handleReturn()}>
                                    Return to the sign in section
                                </a>
                            </div>
                        </div>
                    </>
                ) :
                (
                    <>
                        <div className="subtitle">Signing in</div>
                        <br/>
                        <br/>
                        <div className="buttons">
                            <div className="fill-in-area">
                                <div className="form">
                                    <label className="flabel" for="email-or-phone">E-mail or phone number</label>
                                    <input className="finput" type="text" id="email-or-phone" name="email-or-phone" />
                                    <span className="input-border"></span>
                                </div>
                                <div className="form">
                                    <label className="flabel" for="passphrase">Password</label>
                                    <input className="finput" type="password" id="passphrase" name="passphrase" />
                                    <span className="input-border"></span>
                                </div>
                                <br />
                                <button className="form-submit"><span class="text">Sign in</span><span>Welcome</span></button>
                            </div>
                            <div className="infopult">
                                <a className="sign-in-options" onClick={()=>handleChoice("Registration")}>
                                    Registration
                                </a>
                                <a className="sign-in-options" onClick={()=>handleChoice("ForgotPassword")}>
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                    </>
                )
            }
            </Suspense>
        </>
      );
    };
export default SignInFill;