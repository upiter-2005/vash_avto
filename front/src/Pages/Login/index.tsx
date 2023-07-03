import {useState} from "react"
//dimport {Link} from "react-router-dom"
import styles from "./Login.module.scss"

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(e.target.value)
    }

    return(
        <div className={styles.loginWrapp}>
           <h2>Увійти в систему</h2>
           <div className={styles.inputBlock}>
            <span>Ваш email</span>
            <input type="email" name='email' value={email} onChange={onEmailChange} />
           </div>
           <div className={styles.inputBlock}>
            <span>Ваш пароль</span>
            <input type="password" name='pass' value={password} onChange={onPasswordChange} />
           </div>
         
            <button className="btn">Увійти</button>
           

        </div>
            
    );
}

export default Login;