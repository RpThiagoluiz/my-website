import styled from 'styled-components';

export const Container = styled.div`
height: 30vh;
background: ${({ theme }) => theme.COLORS.BACKGROUND.PRIMARY};
padding: 80px 50px 50px ;
display: flex;
flex-direction: column;
align-items: center;
`;
