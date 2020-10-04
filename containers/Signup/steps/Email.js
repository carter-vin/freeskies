import React, { useState } from 'react';
import NavigationButtons from './NavigationButtons';
import { useForm } from 'react-hook-form';
import styles from '../styles/signup.module.scss';

export default function EmailForm(props) {
  const [email, setEmail] = useState('');
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    props.nextStep();
    props.setFormStore((state) => ({
      ...state,
      ...data,
    }));
  };

  return (
    <form
      className={styles.registration_form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full">
        <input
          className="w-full text-lg bg-transparent py-2 text-white"
          style={{
            outline: 'none',
            borderBottom: '1px solid #DDDFE29E',
            caretColor: 'white',
          }}
          placeholder="Email"
          name="email"
          value={email}
          ref={register({ required: true })}
          onChange={({ target }) => {
            setEmail(target.value);
          }}
        />

        {errors.email && (
          <span className="text-white">This field is required</span>
        )}
      </div>

      <NavigationButtons {...props} nextStep={handleSubmit} />
    </form>
  );
}
