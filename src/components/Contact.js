import React, { useState } from 'react';

import {
  EMPTY_STRING,
  NAME_MIN_LENGTH,
  NAME_LENGTH_ERROR,
  MESSAGE_LENGTH_ERROR,
  EMAIL_REGX,
  EMAIL_ERROR,
  MESSAGE_MIN_LENGTH
} from '../constants';

const Contact = () => {
  const [enteredName, setEnteredName] = useState(EMPTY_STRING);
  const [enteredEmail, setEnteredEmail] = useState(EMPTY_STRING);
  const [enteredMessage, setEnteredMessage] = useState(EMPTY_STRING);
  const [error, setError] = useState({
    name: EMPTY_STRING,
    email: EMPTY_STRING,
    message: EMPTY_STRING
  });

  let isFormValid;

  /**
   * Handles the entered name by user and updates the name state.
   * @param {Object} event 
   */
  const enteredNameChangeHandler = (event) => {
    const newEnteredValue = event.target.value;
    setEnteredName(newEnteredValue);
  };

  /**
   * Handles the entered email by user and updates the email state.
   * @param {Object} event 
   */
  const enteredEmailChangeHandler = (event) => {
    const newEnteredValue = event.target.value;
    setEnteredEmail(newEnteredValue);
  };

  /**
   * Handles the entered message by user and updates the message state.
   * @param {Object} event 
   */
  const enteredMessageChangeHandler = (event) => {
    const newEnteredValue = event.target.value;
    setEnteredMessage(newEnteredValue);
  };

  /**
   * Validates the entered name
   * @returns {boolean}
   */
  const enteredNameValidation = () => {
    if (enteredName.trim().length < NAME_MIN_LENGTH) {
      setError((previousValue) => ({
        ...previousValue,
        name: NAME_LENGTH_ERROR
      }));
      return false;
    } else {
      setError((previousValue) => ({
        ...previousValue,
        name: EMPTY_STRING
      }));
      return true;
    }
  };

  /**
   * Validates the entered email
   * @returns {boolean}
   */
  const enteredEmailValidation = () => {
    if (!EMAIL_REGX.test(enteredEmail)) {
      setError((previousValue) => ({
        ...previousValue,
        email: EMAIL_ERROR
      }));
      return false;
    } else {
      setError((previousValue) => ({
        ...previousValue,
        email: EMPTY_STRING
      }));
      return true;
    }
  };

  /**
   * Validates the entered message
   * @returns {boolean}
   */
  const enteredMessageValidation = () => {
    if (enteredMessage.trim().length < MESSAGE_MIN_LENGTH) {
      setError((previousValue) => ({
        ...previousValue,
        message: MESSAGE_LENGTH_ERROR
      }));
      return false;
    } else {
      setError((previousValue) => ({
        ...previousValue,
        message: EMPTY_STRING
      }));
      return true;
    }
  };

  /**
   * encodes the entered data into string
   * @param {Object} data 
   * @returns {string}
   */
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  /**
   * Checks the validation of the entered data by user and
   * if the data is correct it makes a post request.
   * @param {Object} event 
   * @returns {null}
   */
  const contactFormSubmitHandler = (event) => {
    event.preventDefault();
    const validation = {
      name: enteredNameValidation(),
      email: enteredEmailValidation(),
      message: enteredMessageValidation()
    }

    for (const [key, value] of Object.entries(validation)) {
      if (value === false)
        return;
      isFormValid = true;
    }

    if (isFormValid) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", enteredName, enteredEmail, enteredMessage }),
      })
        .then(() => alert("Message sent!"))
        .catch((error) => alert(error));
    }
  };

  return (
    <div id="contact" className='flex flex-row items-center align-center justify-center mx-auto w-screen h-fit'>
      <div className='hidden lg:block 2xl:w-3/5'>
        <iframe
          title='maps location'
          className='m-5'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425.8056516250222!2d77.08377019855003!3d28.501774512908664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d194114eb0eb5%3A0xa393d2425918921b!2sQuytech%20-%20Mobile%20App%20Development%20Company!5e0!3m2!1sen!2sin!4v1659442875615!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: '0' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className='text-white w-1/2 lg:w-1/5 xl:w-2/5 2xl:w-96 m-5 '>
        <form onSubmit={contactFormSubmitHandler}
          className='flex flex-col justify-center align-center items-center'
        >
          <h1 className='text-xl font-medium mb-1'>Hire Me!</h1>
          <input
            type='text'
            name='name'
            className='w-full bg-black text-white border-solid border-2 border-red-500 rounded mb-2'
            placeholder='Full Name'
            value={enteredName}
            onChange={enteredNameChangeHandler}
          />
          {error.name && <span className='text-red-500'>{error.name}</span>}
          <input
            type='email'
            name='email'
            className='w-full bg-black text-white border-solid border-2 border-red-500 rounded mb-2'
            placeholder='Email Address'
            value={enteredEmail}
            onChange={enteredEmailChangeHandler}
          />
          {error.email && <span className='text-red-500'>{error.email}</span>}
          <textarea
            name='message'
            className='w-full h-48 bg-black text-white border-solid border-2 border-red-500 rounded mb-2'
            placeholder='Message'
            value={enteredMessage}
            onChange={enteredMessageChangeHandler}
          />
          {error.message && <span className='text-red-500'>{error.message}</span>}
          <button
            type='submit'
            className='w-26 text-center inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
