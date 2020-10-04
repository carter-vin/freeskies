import React, { useState } from 'react';
import NavigationButtons from './NavigationButtons';
import styles from '../styles/signup.module.scss';

import ReCAPTCHA from 'react-google-recaptcha';
import { secterKey } from 'configs/reCaptcha';

export default function ReCaptchaForm(props) {
  const handleSubmit = () => {
    // props.nextStep();
  };

  return (
    <form className={styles.registration_form}>
      <div className="w-full">
        <ReCAPTCHA sitekey={secterKey} />
      </div>

      <NavigationButtons
        {...props}
        loading={props.loading}
        onRegistion={props.onRegistration}
      />
    </form>
  );
}
