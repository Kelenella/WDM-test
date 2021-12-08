import s from './Footer.module.css';
export default function TitleFooter({ title }) {
  return <h2 className={s.contactH2}>{title}</h2>;
}
