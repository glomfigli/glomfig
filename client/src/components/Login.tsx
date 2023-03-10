import { useState, type FormEvent } from "react";
import styles from "../styles/App.module.sass";
import LoginService, { type IUser } from "../services/login";

export const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<IUser | null>(null);

  const handleLogin = async (event: FormEvent<HTMLFormElement>):
  Promise<void> => {
    event.preventDefault();
    try {
      const user = await LoginService.login({
        username, password
      });
      setUser(user);
      setUsername("");
      setPassword("");
      console.log(user);
    } catch (exception) {
      console.log(exception);
    }
  };

  return (
    <div>
    <p>logged in as {user?.username}</p>
    <div className={styles.login}>
      <div className={styles.loginBox}>
        { /* eslint-disable */}
        <form onSubmit={handleLogin}>
        { /* eslint-enable */}
        <h2>Login</h2>
        <br />
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" name="username"
         onChange={({ target }) => { setUsername(target.value); }} />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password"
         onChange={({ target }) => { setPassword(target.value); }}/>
        <br /><br />
        <input type="submit" className={styles.loginButton} value="Submit" />

      </form>
    </div>
    </div>
    </div>
  );
};
