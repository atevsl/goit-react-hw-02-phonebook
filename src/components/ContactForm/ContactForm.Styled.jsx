import styled from 'styled-components';
export const FormStyled = styled.form`
   {
    border: 5px solid black;
    border-radius: 15px;
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
  }
`;
export const ButtonStyled = styled.button`
   {
    cursor: pointer;
    padding: 8px 16px;
    margin-top: 45px;
    background-color: white;
    border-radius: 5px;
    font-size: 32px;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;
export const InputStyled = styled.input`
   {
    font-size: 28px;
    height: 50px;
  }
`;
export const LabelStyled = styled.label`
   {
    display: flex;
    flex-direction: column;
    justify-content: center;
    alignitems: center;
  }
`;
