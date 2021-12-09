import DarkButton from '../Buttons/DarkButton/DarkButton';
import { ReactComponent as Decor } from '../../images/svg/Decor.svg';
import s from './Hero.module.css';

export default function Hero() {
  return (
    <section className={s.Hero}>
      <h1 className={s.title}>Lorem ipsum set ammet test-test</h1>
      <p className={s.slogan}>let us help you get it all back!</p>
      <div className={s.divLine}>
        <Decor className={s.line} />
      </div>

      <div className={s.textBtnWrapper}>
        <p className={s.text}>
          We currently take cases that are $10,000 US and up
        </p>
        <DarkButton text="Get a free consultation" />
      </div>
    </section>
  );
}
