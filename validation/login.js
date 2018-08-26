const Validator = require('validator');
const isValid = require('./is-valid');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isValid(data.email) ? data.email: '';
  data.password = !isValid(data.password) ? data.password : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Invalid email';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email required';
  }

  return {
    errors, 
    isValid: isValid(errors)
  };
};