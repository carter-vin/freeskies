import { Login } from 'containers/Login';
import { LoginProvider } from 'containers/Login/storage/LoginContext';

export default function LoginPage() {
  return (
    <>
      <LoginProvider>
        <Login />
      </LoginProvider>
    </>
  );
}
