import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import {
  FormStyled,
  ButtonStyled,
  InputStyled,
  LabelStyled,
  Headers,
} from './ContactForm.Styled';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };
  onInputHendler = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  onSubmitHendler = e => {
    e.preventDefault();
    const newContact = {
      name: this.state.name,
      id: shortid.generate(),
      number: this.state.number,
    };
    this.props.onSubmit(newContact);
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <>
        <Headers>Phonebook</Headers>
        <FormStyled onSubmit={this.onSubmitHendler}>
          <LabelStyled htmlFor="name">
            <span>Name:</span>
            <InputStyled
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.onInputHendler}
            />
          </LabelStyled>
          <LabelStyled htmlFor="number">
            <span>Number:</span>
            <InputStyled
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.onInputHendler}
            ></InputStyled>
          </LabelStyled>

          <ButtonStyled type="submit">Add contact</ButtonStyled>
        </FormStyled>
      </>
    );
  }
}
export default ContactForm;
