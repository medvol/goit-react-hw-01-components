import PropTypes from 'prop-types';
import {
    TransactionTable,
    TableHeader,
    TableColumn,
    TableRow,
    TableBodyRow,
    TableBody,
    TableHeaderRow
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
 
    return (
        <TransactionTable>
            <TableHeader>
                <TableHeaderRow>
                    {Object.keys(items[0])
                    .filter(properties => properties !== 'id')
                    .map(properties => (
                        <TableColumn key={properties}>{properties}</TableColumn>))}               
                </TableHeaderRow>
            </TableHeader>
            <TableBody>
                {items.map(({ id, type, amount, currency }) => (
                     <TableBodyRow key={id}>
                        <TableRow>{ type}</TableRow>
                        <TableRow>{amount }</TableRow>
                        <TableRow>{currency}</TableRow>
                    </TableBodyRow>  
                ))}
                            
            </TableBody>
        </TransactionTable>        
    )
}


TransactionHistory.propTypes = {
    
    stats: PropTypes.arrayOf (PropTypes.exact ({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired                
        }))   
}
