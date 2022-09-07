import PropTypes from 'prop-types';
import { Stats, Label, Quantity, StatsItem } from './UserStats.styled';

export const UserStats = ({ stats }) => {
    const keys = Object.keys(stats); 
 
    return (<Stats>
        {keys.map((key, idx) => (          
            <StatsItem key ={idx}>
                <Label>{key}</Label>
                <Quantity>{stats[key]}</Quantity>
            </StatsItem>
        )             
        
    )}</Stats>)
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