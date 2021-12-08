import s from './DarkButton.module.css';

export default function DarkButton(props) {
  return <button className={s.darkBtn}>{props.text}</button>;
}
