import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/phonebook/phonebook-actions';
import {
  FormContacts,
  InputLabel,
  FormInput,
  FormButton,
} from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleNameChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const ressetForm = () => {
    setName('');
    setNumber('');
  };

  const onSubmit = event => {
    event.preventDefault();
    dispatch(addContact({ name, number }));
    ressetForm();
  };

  return (
    <FormContacts onSubmit={onSubmit}>
      <InputLabel>
        Name
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputLabel>

      <InputLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          value={number}
          onChange={handleNameChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputLabel>
      <FormButton type="submit">Add contact</FormButton>
    </FormContacts>
  );
};

export default ContactForm;
