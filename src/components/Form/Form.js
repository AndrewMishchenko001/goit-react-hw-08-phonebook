import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContacts } from "../../redux/contacts/contacts-action";
import { getItems } from "../../redux/contacts/contacts-selector";
import s from "./Form.module.css";

function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(getItems);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { value, name } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const resetInput = () => {
    setName("");
    setNumber("");
  };

  const checkName = (name) => {
    return contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const checkNumber = (number) => {
    return contacts.find((contact) => contact.number === number);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkName(name)) {
      alert(`${name} is already in your phonebook`);
    } else if (checkNumber(number)) {
      alert(`${number} is already in your phonebook`);
    } else {
      dispatch(addContacts(name, number));
    }
    resetInput();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={name}
          onChange={handleChange}
          autoComplete="off"
          required
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="text"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          value={number}
          onChange={handleChange}
          autoComplete="off"
          required
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default Form;
