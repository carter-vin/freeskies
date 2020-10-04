import React from 'react';
import styles from '../styles/signup.module.scss';

export default function NavigationButtons(props) {
  return (
    <div className={styles.stepwizard_navigation}>
      {props.currentStep > 1 && (
        <button
          className="w-full rounded-md bg-blue-700 h-12 mt-8 text-white text-lg font-medium"
          onClick={props.previousStep}
          type="button"
        >
          BACK
        </button>
      )}

      {props.totalSteps === props.currentStep ? (
        <button
          className="w-full rounded-md bg-green-700 h-12 mt-8 text-white text-lg font-medium"
          style={{ outline: 'none' }}
          type="button"
          onClick={() => {
            if (props.onRegistion) {
              if (props.loading) return;
              props.onRegistion();
            }
          }}
        >
          {/* TODO: loading */}
          {props.loading ? 'Loading...' : 'SIGN UP'}
        </button>
      ) : (
        <button
          className="w-full rounded-md bg-blue-700 h-12 mt-8 text-white text-lg font-medium"
          type="submit"
        >
          NEXT
        </button>
      )}
    </div>
  );
}
