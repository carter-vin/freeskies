import { Signup } from 'containers/Signup';
import { RegistrationProvider } from '../containers/Signup/storage/RegistrationContext';

export default function SignupPage() {
  return (
    <>
      <RegistrationProvider>
        <Signup />
      </RegistrationProvider>
    </>
  );
}
