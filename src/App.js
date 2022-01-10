import React, { useEffect } from 'react';

import Container from './components/container/Container';
import Section from './components/section/Section';
import ContactForm from './components/contactForm/ContactForm';
import ContactList from './components/contactList/ContactList';
// import initData from './tempData/data.json';
import ContactFilter from './components/contactFilter/ContactFilter';
import Header from './components/header/Header';

const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts')) ?? [];
  // });

  // useEffect(() => {
  //   console.log('contacts: ', contacts);
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Header title="Phonebook">
      <Container>
        <Section title={'Phonebook'}>
          <ContactForm />
        </Section>

        <Section title={'Contacts'}>
          <ContactFilter />
          <ContactList
          // contacts={filteredContacts}
          />
        </Section>
      </Container>
    </Header>
  );
};

export default App;
