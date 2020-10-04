import React, { useState } from 'react';
import NavigationButtons from './NavigationButtons';
import { useForm } from 'react-hook-form';

export default function Personal(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = (data) => {
    props.nextStep();
    props.setFormStore((state) => ({
      ...state,
      ...data,
    }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full">
        <div>
          <input
            className="w-full text-lg bg-transparent py-2 text-white"
            value={username}
            name="username"
            onChange={({ target }) => {
              setUsername(target.value);
            }}
            style={{
              outline: 'none',
              borderBottom: '1px solid #DDDFE29E',
              caretColor: 'white',
              marginBottom: 15,
            }}
            ref={register({ required: true })}
            placeholder="User Name"
          />
          {errors.username && (
            <span className="text-white">This field is required</span>
          )}
        </div>
        <div>
          <input
            className="w-full text-lg bg-transparent py-2 text-white"
            value={firstName}
            name="firstName"
            onChange={({ target }) => {
              setFirstName(target.value);
            }}
            style={{
              outline: 'none',
              borderBottom: '1px solid #DDDFE29E',
              caretColor: 'white',
            }}
            ref={register({ required: true })}
            placeholder="First Name"
          />
          {errors.firstName && (
            <span className="text-white">This field is required</span>
          )}
        </div>
        <div>
          <input
            className="w-full text-lg bg-transparent py-2 text-white mt-4"
            name="lastName"
            style={{
              outline: 'none',
              borderBottom: '1px solid #DDDFE29E',
              caretColor: 'white',
            }}
            value={lastName}
            onChange={({ target }) => {
              setLastName(target.value);
            }}
            ref={register({ required: true })}
            placeholder="Last Name"
          />
          {errors.lastName && (
            <span className="text-white">This field is required</span>
          )}
        </div>
      </div>

      <NavigationButtons {...props} />
    </form>
  );
}
