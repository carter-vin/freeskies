import Profile from 'containers/Profile/Profile';
import { ProfileProvider } from '../containers/Profile/storage/ProfileContext';

export default function profile() {
  return (
    <div>
      <ProfileProvider>
      <Profile />
      </ProfileProvider>
    </div>
  );
}
