import styled from "styled-components";

export const Item = styled.li`
    display:flex;
    align-items: center;
    padding:${p => p.theme.space[3]}px;
    padding-left:${p => p.theme.space[4]}px;
    background-color: ${p => p.theme.colors.background};
    border-radius: ${p => p.theme.radii.normal};
    box-shadow: ${p => p.theme.shadows.card};
    :not(:last-child){
    margin-bottom:${p => p.theme.space[3]}px;
    }
`

export const Status = styled.span`
    display:block;
    width:15px;
    height:15px;
    margin-right:${p => p.theme.space[4]}px;
    border-radius:${p=> p.theme.radii.round};
    background-color: ${p => (p.userOnline ? 'green' : 'red')};

`

export const Avatar = styled.img`
    border-radius: ${p => p.theme.radii.normal};
    box-shadow: ${p => p.theme.shadows.card};
    margin-right:${p => p.theme.space[4]}px;
`

export const Name = styled.p`
    color:${p => p.theme.colors.text};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m}; 
   
`