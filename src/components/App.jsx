import { UserProfile } from "./User/UserProfile";
import { Statistics } from "./Statistics/Statistics";
import user from '../user.json'
import data from 'data.json'


export const App = () => {
  return (
    <div>
      <UserProfile user={user} />
      <Statistics
        title="Upload stats"
        stats={data} />
    </div>
  );
};
