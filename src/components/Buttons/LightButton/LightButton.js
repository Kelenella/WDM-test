import s from './LightButton.module.css';

export default function LightButton(props) {
  return <button className={s.lightBtn}>{props.text}</button>;
}
