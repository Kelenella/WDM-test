import s from './Footer.module.css';

export default function ContactCounty({ country }) {
  return (
    <>
      <span className={s.contact}>{country}</span>
    </>
  );
}
