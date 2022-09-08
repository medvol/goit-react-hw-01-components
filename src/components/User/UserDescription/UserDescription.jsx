import PropTypes from 'prop-types';
import {UserImage, UserName, Tag, Location, UserInfo} from './UserDescription.styled'

export const UserDescription = ({ username, tag, location, avatar }) => {
    return (
        <UserInfo>
            <UserImage src={avatar} alt={`${username} avatar`} />
            <UserName>{username}</UserName>
            <Tag>{tag}</Tag>
            <Location>{location}</Location>
        </UserInfo>);
}

UserDescription.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
}