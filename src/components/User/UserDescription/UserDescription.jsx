import PropTypes from 'prop-types';

export const UserDescription = ({ username, tag, location, avatar }) => {
    return (
        <div>
            <img src={avatar} alt={`${username} avatar`} width="250" />
            <p>{username}</p>
            <p>{tag}</p>
            <p>{location}</p>
        </div>);
}

UserDescription.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired

}