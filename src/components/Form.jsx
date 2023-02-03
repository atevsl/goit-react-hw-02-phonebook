import React from 'react';
import styled from 'styled-components';
import shortid from 'shortid';

const FormStyled = styled.form`
   {
    border: 1px solid black;
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const ButtonStyled = styled.button`
   {
    padding: 8px 10px;
    background-color: white;
    border-radius: 5px;
    font-size: 32px;
    margin-left: 10px;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;
const InputStyled = styled.input`
   {
    font-size: 28px;
    height: 50px;
    margin-left: 10px;
  }
`;
const LabelStyled = styled.label`
   {
    display: flex;
    justify-content: center;
    alignitems: center;
  }
`;

class Form extends React.Component {
  onSubmitHendler = e => {
    e.preventDefault();
    const newContact = {
      name: this.props.name,
      id: shortid.generate(),
      number: this.props.number,
    };
    this.props.onSubmit(newContact);
  };
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <FormStyled onSubmit={this.onSubmitHendler}>
          <LabelStyled htmlFor="name">
            <span>Name:</span>
            <InputStyled
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.props.name}
              onChange={this.props.onInputHendler}
            />
          </LabelStyled>
          <LabelStyled htmlFor="number">
            <span>Tel:</span>
            <InputStyled
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.props.number}
              onChange={this.props.onInputHendler}
            ></InputStyled>
          </LabelStyled>
          <ButtonStyled type="submit">Add contact</ButtonStyled>
        </FormStyled>
      </>
    );
  }
}
export default Form;
