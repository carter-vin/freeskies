import { useState } from "react";

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
  }

  return (
    <div className="flex content-center w-full min-h-screen bg-blue-900">
      <div className="m-auto flex flex-col items-center" style={{ width: 410 }}>
        <img src="/logo.png" className="mb-32" style={{ height: 55 }} />
        {content}
        <button
          className="w-full rounded-md bg-blue-700 h-12 mt-8 text-white text-lg"
          style={{ outline: "none" }}
          onClick={onHandleNext}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
