import s from './Footer.module.css';
export default function ContactTel({ tel }) {
  return (
    <>
      <a href={tel} className={s.contact}>
        {tel}
      </a>
    </>
  );
}
