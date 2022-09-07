import styled from "styled-components";

export const Profile = styled.div`
width: 250px;
    text-align: center;
    padding: ${p => p.theme.space[4]}px;
    box-shadow: ${p => p.theme.shadows.card};
    background-color: ${p => p.theme.colors.background};
    border-radius: ${p => p.theme.radii.normal};
    margin-left: auto;
    margin-right: auto;
`