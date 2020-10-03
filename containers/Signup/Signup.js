import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { message } from 'antd';
import _ from 'lodash';
import Select from 'react-select';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './styles/signup.module.scss';
import { RegistrationContext } from './storage/RegistrationContext';
import setLoading from './actions/setLoading';
import API from 'configs/API';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: '#2c5282',
    color: '#a0aec0',
    cursor: 'pointer',
  }),
  menu: (provided, state) => ({
    ...provided,
    backgroundColor: '#2c5282',
  }),
  control: (provided, state) => {
    return {
      ...provided,
      backgroundColor: '#2a4365',
    };
  },
  singleValue: (provided, state) => {
    return { ...provided, color: '#a0aec0' };
  },
};

export default function Signup() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [DOB, setDOB] = useState([undefined, undefined, undefined]);
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [storage, dispatch] = useContext(RegistrationContext);

  const onHandleNext = () => {
    setStep(step + 1);
  };

  const handleRegistration = () => {
    dispatch(setLoading(true));

    const data = {
      username,
      password,
      firstName,
      lastName,
      female: gender === 'female',
      email,
      phone,
      DoB: `${DOB[2] - DOB[1] - DOB[0]}`,
    };

    API({
      method: 'post',
      url: '/accounts/register',
      data,
    }).then((response) => {
      const { status, data } = response;

      if (status === 200) {
        setUsername('');
        setFirstName('');
        setLastName('');
        setGender('');
        setEmail('');
        setPhone('');
        setDOB('');
        setPassword('');
        setRePassword('');

        message.success('Congratulation! You are registred successfully.');
        router.push('/');
      } else {
        message.error(data?.message || 'Something wrong');
      }

      dispatch(setLoading(false));
    });
  };

  let content = null;
  if (step === 0) {
    content = (
      <div className="w-full">
        <input
          className="w-full text-lg bg-transparent py-2 text-white"
          value={username}
          onChange={({ target }) => {
            setUsername(target.value);
          }}
          style={{
            outline: 'none',
            borderBottom: '1px solid #DDDFE29E',
            caretColor: 'white',
            marginBottom: 15,
          }}
          placeholder="User Name"
        />
        <input
          className="w-full text-lg bg-transparent py-2 text-white"
          value={firstName}
          onChange={({ target }) => {
            setFirstName(target.value);
          }}
          style={{
            outline: 'none',
            borderBottom: '1px solid #DDDFE29E',
            caretColor: 'white',
          }}
          placeholder="First Name"
        />
        <input
          className="w-full text-lg  bg-transparent py-2 text-white mt-4"
          style={{
            outline: 'none',
            borderBottom: '1px solid #DDDFE29E',
            caretColor: 'white',
          }}
          value={lastName}
          onChange={({ target }) => {
            setLastName(target.value);
          }}
          placeholder="Last Name"
        />
      </div>
    );
  } else if (step === 1) {
    content = (
      <div className="w-full">
        <p className="text-lg text-gray-500 mb-1 mt-4">Gender</p>
        <div className="flex justify-between mb-4">
          <div className="border border-gray-500 rounded-md flex-grow mr-2 p-2 px-3 flex items-center">
            <label
              for="male"
              className="text-gray-500 flex-grow"
              className={styles.container}
            >
              Male
              <input
                type="radio"
                id="male"
                name="gender"
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
              for="female"
              className="text-gray-500 flex-grow"
              className={styles.container}
            >
              Female
              <input
                type="radio"
                id="female"
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
      </div>
    );
  } else if (step === 2) {
    content = (
      <div className="w-full mt-8">
        <input
          className="w-full text-lg bg-transparent py-2 mb-8 text-white"
          style={{
            outline: 'none',
            borderBottom: '1px solid #DDDFE29E',
            caretColor: 'white',
          }}
          placeholder="Email"
          value={email}
          onChange={({ target }) => {
            setEmail(target.value);
          }}
        />
      </div>
    );
  } else if (step === 3) {
    content = (
      <div className="w-full mt-8">
        <input
          className="w-full text-lg bg-transparent py-2 mb-8 text-white"
          style={{
            outline: 'none',
            borderBottom: '1px solid #DDDFE29E',
            caretColor: 'white',
          }}
          placeholder="Phone"
          value={phone}
          onChange={({ target }) => {
            setPhone(target.value);
          }}
        />
      </div>
    );
  } else if (step === 4) {
    const dayOptions = _.range(1, 32).map((day) => ({
      value: day,
      label: (day < 10 ? '0' : '') + day.toString(),
    }));

    dayOptions.unshift({ value: 0, label: 'Day' });

    const monthOptions = [
      { value: 0, label: 'Month' },
      { value: 1, label: 'January' },
      { value: 2, label: 'February' },
      { value: 3, label: 'March' },
      { value: 4, label: 'April' },
      { value: 5, label: 'May' },
      { value: 6, label: 'June' },
      { value: 7, label: 'July' },
      { value: 8, label: 'August' },
      { value: 9, label: 'September' },
      { value: 10, label: 'October' },
      { value: 11, label: 'November' },
      { value: 12, label: 'December' },
    ];

    const yearOptions = _.range(1900, 2020).map((year) => ({
      value: year,
      label: year.toString(),
    }));
    yearOptions.unshift({ value: 0, label: 'Year' });

    content = (
      <div className="w-full flex mb-8 mt-8">
        <div className="flex-grow mr-2">
          <Select
            options={dayOptions}
            defaultValue={dayOptions[0]}
            className="w-full"
            styles={customStyles}
            onChange={(day) => {
              setDOB((state) => {
                const cpState = state.slice();
                cpState[0] = day.value;
                return cpState;
              });
            }}
          />
        </div>
        <div className="flex-grow mx-2">
          <Select
            options={monthOptions}
            defaultValue={monthOptions[0]}
            className="w-full"
            styles={customStyles}
            onChange={(month) => {
              setDOB((state) => {
                const cpState = state.slice();
                cpState[1] = month.value;
                return cpState;
              });
            }}
          />
        </div>
        <div className="flex-grow ml-2">
          <Select
            options={yearOptions}
            defaultValue={yearOptions[0]}
            className="w-full"
            styles={customStyles}
            onChange={(year) => {
              setDOB((state) => {
                const cpState = state.slice();
                cpState[2] = year.value;
                return cpState;
              });
            }}
          />
        </div>
      </div>
    );
  } else if (step === 5) {
    content = (
      <div className="w-full">
        <input
          type="password"
          className="w-full text-lg bg-transparent py-2 text-white"
          style={{
            outline: 'none',
            borderBottom: '1px solid #DDDFE29E',
            caretColor: 'white',
          }}
          placeholder="Password"
          value={password}
          onChange={({ target }) => {
            setPassword(target.value);
          }}
        />
        <input
          type="password"
          className="w-full text-lg  bg-transparent py-2 text-white mt-4"
          style={{
            outline: 'none',
            borderBottom: '1px solid #DDDFE29E',
            caretColor: 'white',
          }}
          placeholder="Re-type Password"
          value={rePassword}
          onChange={({ target }) => {
            setRePassword(target.value);
          }}
        />
      </div>
    );
  } else if (step === 6) {
    content = <ReCAPTCHA sitekey="6LfrFKQUAAAAAMzFobDZ7ZWy982lDxeps8cd1I2i" />;
  }

  return (
    <div className="flex content-center w-full min-h-screen bg-blue-900">
      <div className="m-auto flex flex-col items-center" style={{ width: 410 }}>
        <img src="/logo.png" className="mb-32" style={{ height: 55 }} />
        {content}
        {step < 6 ? (
          <button
            className="w-full rounded-md bg-blue-700 h-12 mt-8 text-white text-lg font-medium"
            style={{ outline: 'none' }}
            onClick={onHandleNext}
          >
            NEXT
          </button>
        ) : (
          <button
            className="w-full rounded-md bg-green-700 h-12 mt-8 text-white text-lg font-medium"
            style={{ outline: 'none' }}
            type="button"
            onClick={() => {
              if (storage.loading) return;
              handleRegistration();
            }}
          >
            {storage.loading ? 'Loading...' : 'SIGN UP'}
          </button>
        )}
      </div>
    </div>
  );
}
