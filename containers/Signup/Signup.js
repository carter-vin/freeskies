import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { message } from 'antd';
import _ from 'lodash';

import styles from './styles/signup.module.scss';

import StepWizard from 'react-step-wizard';
import { RegistrationContext } from './storage/RegistrationContext';
import setLoading from './actions/setLoading';
import API from 'configs/API';
import {
  Personal,
  Gender,
  Email,
  Phone,
  Birthday,
  Password,
  ReCaptcha,
} from './steps';

export default function Signup() {
  const router = useRouter();
  const [formStore, setFormStore] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    female: '',
    email: '',
    phone: '',
    DoB: [],
  });

  const [storage, dispatch] = useContext(RegistrationContext);

  const handleRegistration = () => {
    dispatch(setLoading(true));

    console.log(formStore);
    const {
      username,
      password,
      firstName,
      lastName,
      gender,
      email,
      phone,
      DOB,
    } = formStore;

    const data = {
      username,
      password,
      firstName,
      lastName,
      female: gender === 'female',
      email,
      phone,
      DoB: `${DOB[2]}-${DOB[1]}-${DOB[0]}`,
    };

    API({
      method: 'post',
      url: '/accounts/register',
      data,
    }).then((response) => {
      const { status, data } = response;

      if (status === 200) {
        setFormStore({});

        message.success('Congratulation! You are registred successfully.');
        router.push('/');
      } else {
        message.error(data?.message || 'Something wrong');
      }

      dispatch(setLoading(false));
    });
  };

  return (
    <div className="flex content-center w-full min-h-screen bg-blue-900">
      <div className="m-auto flex flex-col items-center" style={{ width: 300 }}>
        <img src="/logo.png" className="mb-32" style={{ height: 55 }} />

        <StepWizard className={styles.stepwizard}>
          <Personal setFormStore={setFormStore} />
          <Gender setFormStore={setFormStore} />
          <Email setFormStore={setFormStore} />
          <Phone setFormStore={setFormStore} />
          <Birthday setFormStore={setFormStore} />
          <Password setFormStore={setFormStore} />
          <ReCaptcha
            setFormStore={setFormStore}
            loading={storage.loading}
            onRegistration={handleRegistration}
          />
        </StepWizard>
      </div>
    </div>
  );
}
