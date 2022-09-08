import { UserProfile } from "./User/UserProfile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from './FriendList/FriendList';
import user from '../user.json';
import data from 'data.json';
import friends from 'friends.json';


export const App = () => {
  return (
    <div>
      <UserProfile user={user} />
      <Statistics
        title="Upload stats"
        stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
