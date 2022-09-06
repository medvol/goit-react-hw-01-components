import PropTypes from 'prop-types';
import { UserDescription } from './UserDescription/UserDescription';
import { UserStats } from './UserStats/UserStats';


export const UserProfile = ({user: {username, tag, location, avatar, stats}}) => {
    return <div>
        <UserDescription
            username={username}
            tag={tag}
            location={location}
            avatar={avatar} />
        <UserStats stats={stats} />
    </div>;
}

UserProfile.propTypes = {
    user: PropTypes.shape({ })    
  }


