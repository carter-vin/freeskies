import { useState } from "react";
import Select from "react-select";

import _ from "lodash";

import styles from "./signup.module.css";
import ReCAPTCHA from "react-google-recaptcha";

const MonthOptions = [
  { value: 1, label: "January" },
  { value: 2, label: "February" },
  { value: 3, label: "March" },
  { value: 4, label: "April" },
  { value: 5, label: "May" },
  { value: 6, label: "June" },
  { value: 7, label: "July" },
  { value: 8, label: "August" },
  { value: 9, label: "September" },
  { value: 10, label: "October" },
  { value: 11, label: "November" },
  { value: 12, label: "December" },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: "#2c5282",
    color: "#a0aec0",
    cursor: "pointer",
  }),
  menu: (provided, state) => ({
    ...provided,
    backgroundColor: "#2c5282",
  }),
  control: (provided, state) => {
    return {
      ...provided,
      backgroundColor: "#2a4365",
    };
  },
  singleValue: (provided, state) => {
    return { ...provided, color: "#a0aec0" };
  },
};

export default function SignUp() {
  const [step, setStep] = useState(0);

  const onHandleNext = () => {
    setStep(step + 1);
  };

  let content = null;
  if (step === 0) {
    content = (
      <div className="w-full">
        <input
          className="w-full text-lg bg-transparent py-2"
          style={{
            outline: "none",
            borderBottom: "1px solid #DDDFE29E",
            caretColor: "white",
          }}
          placeholder="First Name"
        />
        <input
          className="w-full text-lg  bg-transparent py-2 mt-4"
          style={{
            outline: "none",
            borderBottom: "1px solid #DDDFE29E",
            caretColor: "white",
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
                checked="checked"
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
              <input type="radio" id="female" name="gender" value="female" />
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
          className="w-full text-lg bg-transparent py-2 mb-8"
          style={{
            outline: "none",
            borderBottom: "1px solid #DDDFE29E",
            caretColor: "white",
          }}
          placeholder="Email"
        />
      </div>
    );
  } else if (step === 3) {
    content = (
      <div className="w-full mt-8">
        <input
          className="w-full text-lg bg-transparent py-2 mb-8"
          style={{
            outline: "none",
            borderBottom: "1px solid #DDDFE29E",
            caretColor: "white",
          }}
          placeholder="Phone"
        />
      </div>
    );
  } else if (step === 4) {
    const dayOptions = _.range(1, 32).map((day) => ({
      value: day,
      label: (day < 10 ? "0" : "") + day.toString(),
    }));

    dayOptions.unshift({ value: 0, label: "Day" });

    const monthOptions = [
      { value: 0, label: "Month" },
      { value: 1, label: "January" },
      { value: 2, label: "February" },
      { value: 3, label: "March" },
      { value: 4, label: "April" },
      { value: 5, label: "May" },
      { value: 6, label: "June" },
      { value: 7, label: "July" },
      { value: 8, label: "August" },
      { value: 9, label: "September" },
      { value: 10, label: "October" },
      { value: 11, label: "November" },
      { value: 12, label: "December" },
    ];

    const yearOptions = _.range(1900, 2020).map((year) => ({
      value: year,
      label: year.toString(),
    }));
    yearOptions.unshift({ value: 0, label: "Year" });

    content = (
      <div className="w-full flex mb-8 mt-8">
        <div className="flex-grow mr-2">
          <Select
            options={dayOptions}
            defaultValue={dayOptions[0]}
            className="w-full"
            styles={customStyles}
          />
        </div>
        <div className="flex-grow mx-2">
          <Select
            options={monthOptions}
            defaultValue={monthOptions[0]}
            className="w-full"
            styles={customStyles}
          />
        </div>
        <div className="flex-grow ml-2">
          <Select
            options={yearOptions}
            defaultValue={yearOptions[0]}
            className="w-full"
            styles={customStyles}
          />
        </div>
      </div>
    );
  } else if (step === 5) {
    content = (
      <div className="w-full">
        <input
          type="password"
          className="w-full text-lg bg-transparent py-2"
          style={{
            outline: "none",
            borderBottom: "1px solid #DDDFE29E",
            caretColor: "white",
          }}
          placeholder="Password"
        />
        <input
          type="password"
          className="w-full text-lg  bg-transparent py-2 mt-4"
          style={{
            outline: "none",
            borderBottom: "1px solid #DDDFE29E",
            caretColor: "white",
          }}
          placeholder="Re-type Password"
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
            style={{ outline: "none" }}
            onClick={onHandleNext}
          >
            NEXT
          </button>
        ) : (
          <button
            className="w-full rounded-md bg-green-700 h-12 mt-8 text-white text-lg font-medium"
            style={{ outline: "none" }}
          >
            SIGN UP
          </button>
        )}
      </div>
    </div>
  );
}
