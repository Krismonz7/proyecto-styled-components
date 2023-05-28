import React from 'react'
import { styled } from 'styled-components';
import ImageFilter from '../../ImageFilter';



export const Card = ({cargo}) => {


    const CardStyle =  styled.div`
    box-shadow: 4px 4px 20px 0px rgba(0,0,0,0.1);
    border-radius: 10px;
    margin: 2px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    font-size: 12px;
    `;

    const Info =  styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      .type{
        font-weight: bold;
      }
    `;


const {date, from , id , type, value} =  cargo;

  return (

    <CardStyle>
        {
          ImageFilter(type)
        }
      <Info>
        <div className="type">
        <span>{type}</span>
        </div>
        <span>{from}</span>
        <span>{value}</span>
      </Info>
      <span>{date}</span>
    
    </CardStyle>

  )
}
