import { useState } from "react";
import { useRouter } from 'next/router'
import styles from "./login.module.css";
import _ from "lodash";

export default function Login() {
  
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/signup');
  }

  return (
    <div className="flex content-center w-full min-h-screen bg-blue-900">
      <div className="m-auto flex flex-col items-center" style={{ width: 410 }}>
        <img src="/logo.png" className="mb-32" style={{ height: 55 }} />
          <div className="w-full">
            <input
              className="w-full text-lg bg-transparent py-2 text-white"
              style={{
                outline: "none",
                borderBottom: "1px solid #DDDFE29E",
                caretColor: "white",
              }}
              placeholder="Username"
            />
            <input
              type="password"
              className="w-full text-lg bg-transparent py-2 text-white"
              style={{
                outline: "none",
                borderBottom: "1px solid #DDDFE29E",
                caretColor: "white",
              }}
              placeholder="Password"
            />
          </div>
          <button
            className="w-full rounded-md bg-blue-700 h-12 mt-8 text-white text-lg font-medium"
            style={{ outline: "none" }}
          >
            SIGN IN
          </button>
          <button
            className="w-full rounded-md bg-green-700 h-12 mt-8 text-white text-lg font-medium"
            style={{ outline: "none" }}
            onClick={handleClick}
          >
            JOIN
          </button>
		  <a href="#" className={styles.forgottenpassword} >Forgot Password?</a>
      </div>
    </div>
  );
}
