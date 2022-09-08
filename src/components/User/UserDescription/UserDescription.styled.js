import styled from "styled-components";

export const UserInfo = styled.div`
    text-align: center;
    padding: ${p => p.theme.space[4]}px;
`

export const UserImage = styled.img`
    width: 100%;
    object-fit: cover;
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
    border-radius: ${p => p.theme.radii.round};
    margin-bottom:${p => p.theme.space[4]}px;
`

export const UserName = styled.p`
    color:${p => p.theme.colors.text};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m};
    margin-bottom:${p => p.theme.space[4]}px;
`

export const Tag = styled.p`
    color:${p => p.theme.colors.muted};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.s};
    margin-bottom:${p => p.theme.space[3]}px;
`

export const Location = styled.p`
    color:${p => p.theme.colors.muted};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.s};
    margin-bottom:${p => p.theme.space[3]}px;
`