import React, { useState, Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = lazy(() => import('./__Registration.jsx'));
const ForgotPassword = lazy(() => import('./__ForgotPassword.jsx'));

const ComponentMap =
{
    "Registration": Registration,
    "ForgotPassword": ForgotPassword,
}

const SignInFill = () =>
{
    const [username, setUsername] = useState('');
    const [passphrase, setPassphrase] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

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

    const validateForm = async (event) => {
        event.preventDefault();

        // Mock API call to validate user credentials
        // const isValidUser = await mockApiCall(username, passphrase);
        const isValidUser = false;
        console.log(username, passphrase);

        if (!username || !passphrase) {
            setErrorMessage('Username and password are required!');
            setTimeout(() => {
                setErrorMessage('');
            }, 4000);
            return;
        }

        if (isValidUser) {
            setErrorMessage('');
            navigate('/new-arrivals');
        } else {
            setErrorMessage('Invalid username or password!');
            setTimeout(() => {
                setErrorMessage('');
            }, 4000);
            return;
        }
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
                                    <input className="finput" type="text" id="email-or-phone" name="email-or-phone" onChange={(e) => setUsername(e.target.value)} />
                                    <span className="input-border"></span>
                                </div>
                                <div className="form">
                                    <label className="flabel" for="passphrase">Password</label>
                                    <input className="finput" type="password" id="passphrase" name="passphrase" onChange={(e) => setPassphrase(e.target.value)} />
                                    <span className="input-border"></span>
                                </div>
                                <br />
                                <button onClick={validateForm}className="form-submit"><span class="text">Sign in</span><span>Welcome</span></button>
                                <p className="error">{errorMessage}</p>
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