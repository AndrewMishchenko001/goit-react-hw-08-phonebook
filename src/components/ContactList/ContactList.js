import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactList.module.css';
import { FaRegTimesCircle } from 'react-icons/fa';
import { deleteContacts } from '../../redux/contacts/contacts-action';
import { filteredContacts } from '../../redux/contacts/contacts-selector';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(filteredContacts);

  return (
    <>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <p className={s.contact}>
              {name} : {number}
            </p>
            <button
              className={s.btn}
              type="button"
              onClick={() => dispatch(deleteContacts(id))}
            >
              <FaRegTimesCircle className={s.icon} />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
