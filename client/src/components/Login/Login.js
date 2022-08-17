import { auth } from '../../utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

import style from './Login.module.css';

const Login = ({
    history
}) => {
    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return alert('Please input valid email adress');
        }

        if (password.length < 5) {
            return alert('Your passwor mast have more than 6 symols!');
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                // console.log(userCredential);
                history.push('/intro');
            })
            .catch(error => alert(error.massage))
    }

    return (
        <div className={style.loginBox}>
            <h2>Login</h2>
            <form className={style.form} onSubmit={onLoginFormSubmitHandler}>
                <div className={style.userBox}>
                    <input type="text" name="email" required="email" />
                    <label htmlFor="email">@-mail</label>
                </div>
                <div className={style.userBox}>
                    <input type="password" name="password" required="password" />
                    <label htmlFor="password">Password</label>
                </div>
                <button className={style.submitBtn} type="submit">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Login
                </button>
                <div style={{ fontSize: "20px" }}>Please find the right position to submit &#128523;</div>
            </form>
        </div>
    );
}

export default Login;