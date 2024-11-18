import React from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = React.useState('');
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        passphrase: '',
        c_passphrase: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = async (event) => {
        event.preventDefault();

        if (!formData.name) {
            setErrorMessage('Name is required!');
            setTimeout(() => {
            setErrorMessage('');
            }, 4000);
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            setErrorMessage('E-mail is required!');
            setTimeout(() => {
            setErrorMessage('');
            }, 4000);
            return;
        } else if (!emailPattern.test(formData.email)) {
            setErrorMessage('E-mail is not valid!');
            setTimeout(() => {
            setErrorMessage('');
            }, 4000);
            return;
        }

        const phonePattern = /^\d{10}$/;
        if (!formData.phone) {
            setErrorMessage('Phone number is required!');
            setTimeout(() => {
            setErrorMessage('');
            }, 4000);
            return;
        } else if (!phonePattern.test(formData.phone)) {
            setErrorMessage('Phone number is not valid!');
            setTimeout(() => {
            setErrorMessage('');
            }, 4000);
            return;
        }

        if (!formData.passphrase) {
            setErrorMessage('Password is required!');
            setTimeout(() => {
            setErrorMessage('');
            }, 4000);
            return;
        }

        if (formData.passphrase !== formData.c_passphrase) {
            setErrorMessage('Passwords do not match!');
            setTimeout(() => {
            setErrorMessage('');
            }, 4000);
            return;
        }

        navigate('/new-arrivals');
    };

    return (
        <>
            <div className="subtitle">Registration</div>
            <div className="fill-in-area">
                <div className="form">
                    <label className="flabel" htmlFor="name">Full name</label>
                    <input className="finput" type="text" id="name" name="name" onChange={handleChange} />
                    <span className="input-border"></span>
                </div>
                <div className="form">
                    <label className="flabel" htmlFor="email">E-mail</label>
                    <input className="finput" type="text" id="email" name="email" onChange={handleChange} />
                    <span className="input-border"></span>
                </div>
                <div className="form">
                    <label className="flabel" htmlFor="phone">Phone number</label>
                    <input className="finput" type="text" id="phone" name="phone" onChange={handleChange} />
                    <span className="input-border"></span>
                </div>
                <div className="form">
                    <label className="flabel" htmlFor="passphrase">Password</label>
                    <input className="finput" type="password" id="passphrase" name="passphrase" onChange={handleChange} />
                    <span className="input-border"></span>
                </div>
                <div className="form">
                    <label className="flabel" htmlFor="c_passphrase">Confirm password</label>
                    <input className="finput" type="password" id="c_passphrase" name="c_passphrase" onChange={handleChange} />
                    <span className="input-border"></span>
                </div>
                <br />
                <button className="form-submit" onClick={validateForm}><span className="text">Register</span><span>Hello</span></button>
                <p className="error">{errorMessage}</p>
                <br />
            </div>
        </>
    );
};

export default Registration;