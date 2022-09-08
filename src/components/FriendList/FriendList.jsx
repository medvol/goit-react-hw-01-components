import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';
import { FriendsBoard } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <FriendsBoard>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    key={id} />
             
            ))}
        </FriendsBoard>
    )
}

FriendList.propTypes = {    
    friends: PropTypes.arrayOf(PropTypes.exact ({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id:PropTypes.number.isRequired,
                
        }))   
}