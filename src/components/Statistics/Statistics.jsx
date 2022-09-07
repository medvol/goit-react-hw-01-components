import PropTypes from 'prop-types';
import { Statistic, StatTitle, StatList, StatItem, Label, Percentage } from './Statistics.styled';


export const Statistics = ({ title, stats }) => {
    return (
        <Statistic>
            {title && <StatTitle>{title}</StatTitle>}
             <StatList>
            {stats.map(stat => 
                (<StatItem key ={stat.id}>
                    <Label>{stat.label}</Label>
                    <Percentage>{`${ stat.percentage }%`}</Percentage>
                </StatItem>)
            )}
        </StatList>
        </Statistic>
    )
    
}



Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.exact ({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired          
                
        })   
}

/* <section class="statistics">
  <h2 class="title">Upload stats</h2>

  
</section> */