const Validator = require('validator');
const isValid = require('./is-valid');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isValid(data.name) ? data.name : '';
  data.email = !isValid(data.email) ? data.email : '';
  data.password = !isValid(data.password) ? data.password : '';
  data.password2 = !isValid(data.password2) ? data.password2 : '';

  if (!Validator.isLength(data.name, {min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm password required';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  return {
    errors, 
    isValid: isValid(errors)
  };
};