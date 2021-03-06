const Validator = require('validator');
const isValid = require('./is-valid');

module.exports = function validateEventInput(data) {
  let errors = {};

  data.text = !isValid(data.text) ? data.text : '';

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = 'Event name must be between 10 and 300 characters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  return {
    errors, 
    isValid: isValid(errors)
  };
};