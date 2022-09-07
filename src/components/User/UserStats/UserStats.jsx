import PropTypes from 'prop-types';

export const UserStats = ({ stats }) => {
    const keys = Object.keys(stats); 
 
    return (<ul>
        {keys.map((key, idx) => (          
            <li key ={idx}>
                <span>{key}</span>
                <span>{stats[key]}</span>
            </li>
        )             
        
    )}</ul>)
}

// export const UserStats = ({ stats: { followers, views, likes } }) => {
//     console.log()
//     return (
//         <ul>
//             <li>
//                 <span>Followers</span>
//                 <span>{followers}</span>
//             </li>
//             <li>
//                 <span>Views</span>
//                 <span>{views}</span>
//             </li>
//             <li>
//                 <span>Likes</span>
//                 <span>{likes}</span>
//             </li>
//         </ul>

//     );
// }

UserStats.propTypes = {
    stats: PropTypes.exact ({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired          
                
        })   
}