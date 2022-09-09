import styled from "styled-components";

export const TransactionTable = styled.table`
    width: 450px;
    text-align: center;
    margin-top: ${p => p.theme.space[6]}px;    
    box-shadow: ${p => p.theme.shadows.card};
    background-color: ${p => p.theme.colors.background};
    border-radius: ${p => p.theme.radii.normal};   
    margin-left: auto;
    margin-right: auto;
`

export const TableHeader = styled.thead`
    color:${p => p.theme.colors.white};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.s};
    text-transform:uppercase;
    background-color: ${p => p.theme.colors.accent};        
`

export const TableHeaderRow = styled.tr`
   
`

export const TableColumn = styled.th`
    padding-top: ${p => p.theme.space[3]}px; 
    padding-bottom: ${p => p.theme.space[3]}px;  
`
export const TableRow = styled.td`
    padding-top: ${p => p.theme.space[3]}px; 
    padding-bottom: ${p => p.theme.space[3]}px;  
    font-size: ${p => p.theme.fontSizes.xs};
`
export const TableBodyRow = styled.tr`
   
`

export const TableBody = styled.tbody`
   
`