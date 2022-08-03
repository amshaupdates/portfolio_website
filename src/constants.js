const EMPTY_STRING = '';

//Errors
const NAME_LENGTH_ERROR = 'Name should be atleast of 3 characters.'
const MESSAGE_LENGTH_ERROR = 'Message should be atleast of 50 characters.'
const EMAIL_ERROR = 'Invalid Email'

// Lengths
const NAME_MIN_LENGTH = 3;
const MESSAGE_MIN_LENGTH = 50;

//Keys and Regular Expressions
const EMAIL_REGX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export {
    EMPTY_STRING,
    NAME_MIN_LENGTH,
    NAME_LENGTH_ERROR,
    MESSAGE_LENGTH_ERROR,
    EMAIL_REGX,
    EMAIL_ERROR,
    MESSAGE_MIN_LENGTH  
};