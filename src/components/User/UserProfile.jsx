import PropTypes from 'prop-types';
import { UserDescription } from './UserDescription/UserDescription';
import { UserStats } from './UserStats/UserStats';
import { Profile } from './UserProfile.styled';


export const UserProfile = ({user: {username, tag, location, avatar, stats}}) => {
    return <Profile>
        <UserDescription
            username={username}
            tag={tag}
            location={location}
            avatar={avatar} />
        <UserStats stats={stats} />
    </Profile>;
}

UserProfile.propTypes = {
    user: PropTypes.shape({ })    
  }


