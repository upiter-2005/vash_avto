import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Register.module.scss";

const Register: React.FC = () => {
  const [email, setEmail] = useState <string > ("");
  const [password, setPassword] = useState < string > ("");
  const [repeat, setRepeat] = useState < string > ("");
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onPasswordRepeatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeat(e.target.value);
  };

  return (
    <div className={styles.loginWrapp}>
      <h2>Реєстрація акаунту</h2>
      <div className={styles.inputBlock}>
        <span>Ваш email</span>
        <input type="email" name="email" value={email} onChange={onEmailChange} />
      </div>
      <div className={styles.inputBlock}>
        <span>Ваш пароль</span>
        <input type="password" name="pass" value={password} onChange={onPasswordChange} />
      </div>
      <div className={styles.inputBlock}>
        <span>Повторити пароль</span>
        <input type="password" name="pass" value={repeat} onChange={onPasswordRepeatChange} />
      </div>

      <button className="btn">Зареєструвати</button>
    </div>
  );
};

export default Register;
