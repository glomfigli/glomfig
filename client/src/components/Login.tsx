import { useState, type FormEvent } from "react";
import styles from "../styles/App.module.sass";
import LoginService, { type IUser } from "../services/login";

const isLoggedIn = (): boolean => {
  const token = window.localStorage.getItem("userToken");

  if (token !== null) {
    return true;
  }
  return false;
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
      console.log("Added ", user, " to the cookies and local storage");
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (exception) {
      console.log(exception);
    }
  };

  /* eslint-disable */
  const signOut = (): void => {
      window.localStorage.removeItem("userToken");
      location.reload();
  };

  const getAuthToken = (): void => {
      console.log(window.localStorage.getItem("userToken"));
  };
  /* eslint-enable */

  const loggedIn = isLoggedIn();
  console.log(user);

  return (
    <div>
      { loggedIn
        ? <div>
            <p>logged in as {user?.username}</p>
            <button onClick={signOut}>Sign out</button>
            <button onClick={getAuthToken}>Get auth token</button>
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
