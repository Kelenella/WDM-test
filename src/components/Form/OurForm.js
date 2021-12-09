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
        <h2 className={s.title}>
          <span className={s.accentText}>Contact</span> Us
        </h2>

        <FormGroup as={Col} className={s.group}>
          <FormControl
            // value={firstName}
            type="text"
            name="firstName"
            placeholder=" "
            className={s.control}
          />
          <FormLabel htmlFor="firstName" className={s.label}>
            First Name
          </FormLabel>
        </FormGroup>

        <FormGroup className={s.group}>
          <FormControl
            // value={lastName}
            type="text"
            name="lastName"
            placeholder=" "
            className={s.control}
          />
          <FormLabel htmlFor="lastName" className={s.label}>
            Last Name
          </FormLabel>
        </FormGroup>
        <FormGroup className={s.group}>
          <FormControl
            // value={phone}
            type="tel"
            name="phone"
            placeholder=" "
            className={s.telControl}
          />

          <FormLabel htmlFor="phone" className={s.label}>
            +1
          </FormLabel>
          <Form.Select className={s.select}> </Form.Select>
          <Flag className={s.flag} />
        </FormGroup>

        <FormGroup className={s.group}>
          <FormControl
            // value={email}
            type="email"
            name="email"
            placeholder=" "
            className={s.control}
          />
          <FormLabel htmlFor="email" className={s.label}>
            Enter email
          </FormLabel>
        </FormGroup>
        <FormGroup as={Col} className={s.group}>
          <Form.Control
            // value={message}
            as="textarea"
            type="text"
            name="message"
            placeholder=" "
            className={s.textarea}
          />
          <FormLabel className={s.labelTextArea}>
            Tell Us What Happened
          </FormLabel>
        </FormGroup>
        <DarkButton text="Send" type="submit" />
      </Form>
    </>
  );
}
