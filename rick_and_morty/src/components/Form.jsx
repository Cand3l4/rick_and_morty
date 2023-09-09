import React from 'react';
import './Form.css';
import { useState } from 'react';
import { validateForm } from './Validation';

function Form() {
    
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });
    
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
        ...userData,
        [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm(userData);
        setErrors(formErrors);
    };

    
return (

    <form className="login-form">
            <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
    </div>
        <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
                type="password"
                id="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
            />
            {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
    </form>
    );

}



export default Form;