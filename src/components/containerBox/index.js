import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex: 1;
    background-color: red;
`


const ContainerBox = ({children}) => {
        <Container>
            {children}
        </Container>
};

export default ContainerBox;