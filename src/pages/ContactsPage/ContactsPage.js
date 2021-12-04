import React from 'react';

import Form from '../../components/Form';
import Section from '../../components/Section';
import Contacts from '../../components/ContactList';
import Filter from '../../components/Filter';
import s from '../../components/Form/Form.module.css';

function ContactsPage() {
  return (
    <div className={s.container}>
      <Section title="Phonebook">
        <Form />
      </Section>

      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </div>
  );
}
export default ContactsPage;
