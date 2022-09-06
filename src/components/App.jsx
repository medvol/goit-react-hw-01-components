import { UserProfile} from "./User/UserProfile";
import user from '../user.json'


export const App = () => {
  return (
    <div>
      <UserProfile user = {user} />
    </div>
  );
};
