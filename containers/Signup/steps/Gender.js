import React, { useState } from 'react';
import NavigationButtons from './NavigationButtons';
import { useForm } from 'react-hook-form';
import styles from '../styles/signup.module.scss';

export default function Gender(props) {
  const [gender, setGender] = useState('');
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
        <p className="text-lg text-gray-500 mb-1">Gender</p>
        <div className="flex justify-between mb-4">
          <div className="border border-gray-500 rounded-md flex-grow mr-2 p-2 px-3 flex items-center">
            <label
              htmlFor="male"
              className="text-gray-500 flex-grow"
              className={styles.container}
            >
              Male
              <input
                type="radio"
                id="male"
                name="gender"
                ref={register({ required: true })}
                value="male"
                checked={gender === 'male'}
                onChange={({ target }) => {
                  setGender(target.value);
                }}
              />
              <span className={styles.checkmark}></span>
            </label>
          </div>
          <div className="border border-gray-500 rounded-md flex-grow ml-2 p-2 px-3 flex items-center">
            <label
              htmlFor="female"
              className="text-gray-500 flex-grow"
              className={styles.container}
            >
              Female
              <input
                type="radio"
                id="female"
                ref={register({ required: true })}
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={({ target }) => {
                  setGender(target.value);
                }}
              />
              <span className={styles.checkmark}></span>
            </label>
          </div>
        </div>
        {errors.gender && (
          <span className="text-white">This field is required</span>
        )}
      </div>

      <NavigationButtons {...props} nextStep={handleSubmit} />
    </form>
  );
}
