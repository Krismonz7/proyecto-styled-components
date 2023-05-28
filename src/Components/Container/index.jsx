import React from "react";
import Title from "../Title";
import Account from "../Account";
import { styled } from "styled-components";
import { List } from "../List/List";




const Container = () => {

  const StyledContainer = styled.div`
    background-color: #f1f1f1;
    min-height: 90vh;
    padding: 0px 15vw;
  `;

  const StyledContent = styled.section`
    border : 2px solid cyan;
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
