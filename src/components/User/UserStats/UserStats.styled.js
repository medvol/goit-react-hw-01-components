import styled from "styled-components";

export const Stats = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
export const StatsItem = styled.li`
  display:flex;
  flex-direction: column;
  align-items:center;
`

export const Label = styled.span`
  color:${p => p.theme.colors.muted};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};    
  padding: ${p => p.theme.space[2]}px;
   
`

export const Quantity = styled.span`
  color:${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};    
  padding: ${p => p.theme.space[2]}px;
    
`