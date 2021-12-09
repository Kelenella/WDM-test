import s from './Form.module.css';
import { ReactComponent as Flag } from '../../images/svg/Flag.svg';
import { useState } from 'react';
import { Col, Form, FormControl, FormLabel, FormSelect } from 'react-bootstrap';
import DarkButton from '../Buttons/DarkButton/DarkButton';
import { FormGroup } from 'react-bootstrap';

export default function OurForm() {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  return (
    <>
      <Form className={s.form}>
        <h2>
          <span>Contact</span> us
        </h2>

        <FormGroup as={Col} className={s.group}>
          <FormLabel className={s.label}></FormLabel>
          <FormControl
            // value={firstName}
            type="text"
            name="firstName"
            placeholder="First Name"
            className={s.control}
          />
        </FormGroup>

        <FormGroup className={s.group}>
          <FormLabel></FormLabel>
          <FormControl
            // value={lastName}
            type="text"
            name="lastName"
            placeholder="Last Name"
            className={s.control}
          />
        </FormGroup>
        <FormGroup className={s.group}>
          <FormLabel></FormLabel>
          <Flag className={s.flag} />
          <FormSelect style={{ width: '25px' }} className={s.select} />
          <FormControl
            // value={phone}
            type="tel"
            name="phone"
            placeholder="+1"
            className={s.telControl}
          />
        </FormGroup>

        <FormGroup className={s.group}>
          <FormLabel></FormLabel>
          <FormControl
            // value={email}
            type="email"
            name="email"
            placeholder="Enter email"
            className={s.control}
          />
        </FormGroup>
        <FormGroup as={Col} className={s.group}>
          <FormLabel></FormLabel>
          <Form.Control
            // value={message}
            as="textarea"
            type="text"
            name="message"
            placeholder="Tell Us What Happened"
            className={s.textarea}
          />
        </FormGroup>
        <DarkButton text="Send" type="submit" />
      </Form>
    </>
  );
}
