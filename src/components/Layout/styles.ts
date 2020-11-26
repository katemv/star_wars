import styled from "styled-components";

export const Container = styled.div`
    background: ${({theme}) => theme.colors.gradientPrimaryFallback};
    background: ${({theme}) => theme.colors.gradientPrimary};
    height: 100%;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    padding: 100px;
`;

export const Card = styled.section`
    flex: 1;
    background: ${({theme}) => theme.colors.gradientSecondaryFallback};
    background: ${({theme}) => theme.colors.gradientSecondary};
    box-shadow: ${({theme}) => theme.boxShadow};
    border-radius: 20px;
    padding: 20px 25px;
`;

export const SideBar = styled.aside`
    width: 25%;
    background: ${({theme}) => theme.colors.accent};
    box-shadow: ${({theme}) => theme.boxShadow};
    margin-right: 20px;
    padding: 20px 25px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    min-height: 700px;
`;

export const SideBarHeading = styled.h2`
    border-radius: 20px;
    font-weight: 900;
    font-size: 50px;
    color: ${({theme}) => theme.colors.accentDark};
    margin: 0;
    margin-bottom: 20px;
`;

export const Heading = styled.h1`
    border-radius: 20px;
    font-weight: 900;
    font-size 50px;
    margin: 0;
    color: ${({theme}) => theme.colors.textContrast};
`;
