import { useState } from "react";

import styles from "./signup.module.css";

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
          style={{ outline: "none", borderBottom: "1px solid #DDDFE29E" }}
          placeholder="First Name"
        />
        <input
          className="w-full text-lg  bg-transparent py-2 mt-4"
          style={{ outline: "none", borderBottom: "1px solid #DDDFE29E" }}
          placeholder="Last Name"
        />
      </div>
    );
  } else if (step === 1) {
    content = (
      <div className="w-full">
        <p className="text-lg text-gray-500 mb-1">Gender</p>
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
  }

  return (
    <div className="flex content-center w-full min-h-screen bg-blue-900">
      <div className="m-auto flex flex-col items-center" style={{ width: 410 }}>
        <img src="/logo.png" className="mb-32" style={{ height: 55 }} />
        {content}
        <button
          className="w-full rounded-md bg-blue-700 h-12 mt-8 text-white text-lg font-medium"
          style={{ outline: "none" }}
          onClick={onHandleNext}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
