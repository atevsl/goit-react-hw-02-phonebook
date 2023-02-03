import React from 'react';
import {
  ListStyled,
  ListItemStyled,
  ContactTextStyled,
} from './ContactList.styled';
import { ButtonStyled } from '../ContactForm/ContactForm.Styled';
const ContactItem = ({ contact: { id, name, number }, deleteItem }) => {
  return (
    <>
      <ContactTextStyled>
        {name}: {number}
      </ContactTextStyled>
      <ButtonStyled type="button" onClick={() => deleteItem(id)}>
        Delete
      </ButtonStyled>
    </>
  );
};

class ContactList extends React.Component {
  state = {};
  render() {
    return (
      <>
        <h2>Contacts</h2>

        <ListStyled>
          {this.props.filter === ''
            ? this.props.phoneBook.map((contact, idx) => {
                return (
                  <ListItemStyled key={idx}>
                    <ContactItem
                      contact={contact}
                      deleteItem={this.props.deleteItem}
                    ></ContactItem>
                  </ListItemStyled>
                );
              })
            : this.props.phoneBook
                .filter(contact =>
                  contact.name
                    .toLowerCase()
                    .includes(this.props.filter.toLowerCase())
                )
                .map((contact, idx) => {
                  return (
                    <ListItemStyled key={idx}>
                      <ContactItem
                        contact={contact}
                        deleteItem={this.props.deleteItem}
                      ></ContactItem>
                    </ListItemStyled>
                  );
                })}
        </ListStyled>
      </>
    );
  }
}
export default ContactList;
