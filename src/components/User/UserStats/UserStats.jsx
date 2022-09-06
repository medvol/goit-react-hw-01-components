import PropTypes from 'prop-types';

export const UserStats = ({stats:{followers, views, likes}}) => {
    return (
        <ul>
            <li>
                <span>Followers</span>
                <span>{followers}</span>
            </li>
            <li>
                <span>Views</span>
                <span>{views}</span>
            </li>
            <li>
                <span>Likes</span>
                <span>{likes}</span>
            </li>
        </ul>

    );
}

UserStats.propTypes = {
    stats: PropTypes.exact ({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired          
                
        })   
}