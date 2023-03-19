import styled from 'styled-components';

export const Container = styled.div`
height: 40svh;
background: ${({ theme }) => theme.COLORS.BACKGROUND.SECONDARY};
padding: 80px 50px 50px ;
display: flex;
flex-direction: column;
align-items: center;
`;

export const Wrapper = styled.div`

background: ${({ theme }) => theme.COLORS.BACKGROUND.SECONDARY};
padding: 30px 50px;
border-radius: 14px;
width: 45svw;
`;
