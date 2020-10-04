import React, { useEffect, useState } from 'react';
import NavigationButtons from './NavigationButtons';
import _ from 'lodash';
import Select from 'react-select';
import styles from '../styles/signup.module.scss';

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

export default function BirhdayForm(props) {
  const [DOB, setDOB] = useState([undefined, undefined, undefined]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.nextStep();
    props.setFormStore((state) => ({
      ...state,
      DOB,
    }));
  };

  return (
    <form className={styles.registration_form} onSubmit={handleSubmit}>
      <div className="w-full flex mb-8">
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

      <NavigationButtons {...props} />
    </form>
  );
}
