import React from 'react';
import { LabelStyled, InputStyled } from '../ContactForm/ContactForm.Styled';
import { SpanStyled } from './Filter.styled';
const Filter = props => {
  return (
    <LabelStyled>
      <SpanStyled>Find contacts by name:</SpanStyled>
      <InputStyled name="filter" onChange={props.onInputHendler}></InputStyled>
    </LabelStyled>
  );
};
export default Filter;
