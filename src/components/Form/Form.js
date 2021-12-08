import s from './Form.module.css';
import { nanoid } from 'nanoid';
import { React, useState } from 'react';
import DarkButton from '../Buttons/DarkButton/DarkButton';

export default function Form({ onSubmit }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'firstName':
        return setFirstName(value);
      case 'lastName':
        return setLastName(value);
      case 'number':
        return setNumber(value);
      case 'email':
        return setEmail(value);
      case 'message':
        return setMessage(value);

      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const review = {
      id: nanoid(5),
      firstName,
      lastName,
      number,
      email,
      message,
    };
    onSubmit(review);

    reset();
  };
  const reset = () => {
    setFirstName('');
    setLastName('');
    setNumber('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <h2>
        <span>Contact</span> us
      </h2>
      <form onSubmit={handleSubmit}>
        <label className={s.label}>
          First Name
          <input
            onChange={handleInputChange}
            value={firstName}
            className={s.input}
            type="text"
            name="firstName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="First name"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={s.label}>
          Last Name
          <input
            onChange={handleInputChange}
            value={lastName}
            className={s.input}
            type="text"
            name="lastName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Last name"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={s.label}>
          <select></select>
          <input
            value={number}
            className={s.input}
            onChange={handleInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            placeholder="+"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <label className={s.label}>
          Enter email
          <input
            value={email}
            className={s.input}
            onChange={handleInputChange}
            type="email"
            name="email"
            placeholder="Enter email"
            required
            autoComplete="on"
          />
        </label>
        <textarea
          name="message"
          value={message}
          onChange={handleInputChange}
          placeholder="Tell Us What Happened"
          required
        ></textarea>
        <DarkButton text="Send" type="submit" />
      </form>
    </>
  );
}
