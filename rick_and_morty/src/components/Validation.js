// validation.js
export const validateForm = (userData) => {
    const errors = {};
 
    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!userData.email.trim()) {
       errors.email = 'El email no puede estar vacío.';
    } else if (!emailRegex.test(userData.email)) {
       errors.email = 'El email no es válido.';
    } else if (userData.email.length > 35) {
       errors.email = 'El email no puede tener más de 35 caracteres.';
    }
 
    // Validación de contraseña
    const passwordRegex = /^(?=.*\d).{6,10}$/;
    if (!userData.password.trim()) {
       errors.password = 'La contraseña no puede estar vacía.';
    } else if (!passwordRegex.test(userData.password)) {
       errors.password = 'La contraseña debe tener entre 6 y 10 caracteres y contener al menos un número.';
    }
 
    return errors;
 };
 