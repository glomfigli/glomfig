import { useState, type FormEvent } from "react";
import styles from "../styles/App.module.sass";
import LoginService, { type IUser } from "../services/login";

const isLoggedIn = (): boolean => {
  return document.cookie.split(";").find((cookie) =>
    cookie.startsWith("authentication-token")) !== undefined;
};

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
    } catch (exception) {
      console.log(exception);
    }
  };

  const signOut = (): void => { };

  const loggedIn = isLoggedIn();
  console.log(user);

  return (
    <div>
      { loggedIn
        ? <div>
            <p>logged in as</p>
            <button onClick={signOut}>Sign out</button>
          </div>
        : <div className={styles.login}>
      <div className={styles.loginBox}>
        { /* eslint-disable */}
        <form onSubmit={handleLogin}>
        { /* eslint-enable */}
          <h2>Sign in</h2>
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
      }
    </div>
  );
};
