import React, { useState } from 'react';
import NavigationButtons from './NavigationButtons';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { useForm } from 'react-hook-form';
import styles from '../styles/signup.module.scss';

export default function PasswordForm(props) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rePassword, setRePassword] = useState('');
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
        <div>
          <div
            style={{
              display: 'flex',
              borderBottom: '1px solid #DDDFE29E',
              alignItems: 'center',
            }}
          >
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full text-lg bg-transparent py-2 text-white"
              style={{
                outline: 'none',
                caretColor: 'white',
              }}
              placeholder="Password"
              name="password"
              value={password}
              ref={register({ required: true })}
              onChange={({ target }) => {
                setPassword(target.value);
              }}
            />

            <span
              style={{ color: '#ffffff69', cursor: 'pointer' }}
              onClick={() => {
                setShowPassword((state) => !state);
              }}
            >
              {showPassword ? (
                <EyeInvisibleOutlined style={{ fontSize: 18 }} />
              ) : (
                <EyeOutlined style={{ fontSize: 18 }} />
              )}
            </span>
          </div>
          {errors.password && (
            <span className="text-white">This field is required</span>
          )}
        </div>

        <div>
          <div
            style={{
              display: 'flex',
              borderBottom: '1px solid #DDDFE29E',
              alignItems: 'center',
            }}
          >
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full text-lg  bg-transparent py-2 text-white mt-2"
              style={{
                outline: 'none',
                caretColor: 'white',
              }}
              placeholder="Re-type Password"
              name="rePassword"
              value={rePassword}
              ref={register({ required: true })}
              onChange={({ target }) => {
                setRePassword(target.value);
              }}
            />
            <span
              style={{ color: '#ffffff69', cursor: 'pointer' }}
              onClick={() => {
                setShowPassword((state) => !state);
              }}
            >
              {showPassword ? (
                <EyeInvisibleOutlined style={{ fontSize: 18 }} />
              ) : (
                <EyeOutlined style={{ fontSize: 18 }} />
              )}
            </span>
          </div>
        </div>
        {errors.rePassword && (
          <span className="text-white">This field is required</span>
        )}
      </div>

      <NavigationButtons {...props} nextStep={handleSubmit} />
    </form>
  );
}
