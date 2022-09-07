import styled from "styled-components";
import { getRandomHexColor } from "components/helpers/randomColor";

export const Statistic = styled.section`
    width: 350px;
    text-align: center;
    margin-top: ${p => p.theme.space[6]}px;    
    box-shadow: ${p => p.theme.shadows.card};
    background-color: ${p => p.theme.colors.background};
    border-radius: ${p => p.theme.radii.normal};
    padding-top:${p => p.theme.space[5]}px;
    margin-left: auto;
    margin-right: auto;
`

export const StatTitle = styled.h2`
    color:${p => p.theme.colors.text};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.l};
    text-transform:uppercase;
    margin-bottom:${p => p.theme.space[5]}px;
    
`

export const StatList = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);    
`
export const StatItem = styled.li`
    display: grid;
    grid-template-columns: 1fr;
    padding: ${p => p.theme.space[4]}px;
    background-color: ${getRandomHexColor};    
`

export const Label = styled.span`
    color:${p => p.theme.colors.white};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.s}; 
    margin-bottom: ${p => p.theme.space[3]}px;     
    
   
`

export const Percentage = styled.span`
    color:${p => p.theme.colors.white};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m};    
    
    
`