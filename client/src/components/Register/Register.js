import { auth, database } from '../../utils/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from "firebase/database";

import style from './Register.module.css';

const Register = ({
    history
}) => {
    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();

        const user = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const rePassword = e.target.rePassword.value;

        if (!user) {
            return alert('Please input username!');
        }

        if (!email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return alert('Please input valid email adress');
        }

        if (password.length < 5) {
            return alert('Your passwor mast have more than 6 symols!');
        }

        if (rePassword !== password) {
            return alert("Wrong password!");
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {


                set(ref(database, '/users/' + userCredential.user.uid), {
                    isOwner: false,
                    name: user,
                    email: userCredential.user.email
                });

                history.push('/intro');
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className={style.loginBox}>
            <h2>Register</h2>
            <form className={style.form} onSubmit={onLoginFormSubmitHandler}>
                <div className={style.userBox}>
                    <input type="text" name="username" required="username" />
                    <label htmlFor="username">Username</label>
                </div>
                <div className={style.userBox}>
                    <input type="text" name="email" required="email" />
                    <label htmlFor="email">@-mail</label>
                </div>
                <div className={style.userBox}>
                    <input type="password" name="password" required="password" />
                    <label htmlFor="password">Password</label>
                </div>
                <div className={style.userBox}>
                    <input type="password" name="rePassword" required="rePassword" />
                    <label htmlFor="rePassword">Repeat password</label>
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

export default Register;