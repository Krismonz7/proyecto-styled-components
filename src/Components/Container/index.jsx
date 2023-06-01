import React from "react";
import Title from "../Title";
import Account from "../Account";
import { styled } from "styled-components";
import { List } from "../List/List";




const Container = () => {

  const StyledContainer = styled.div`
    background-color: ${({theme})=> theme.body };
    color: ${({theme})=> theme.text};
    min-height: 90vh;
    padding: 0px 15vw;
  `;

  const StyledContent = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 800px) {
      flex-direction: column;
    }
  `;

  return (
    <StyledContainer>
      <Title>Smart Bank</Title>
      <StyledContent>
        <Account />
        <List />
      </StyledContent>
    </StyledContainer>
  );
};

export default Container;
