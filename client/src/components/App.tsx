import { useState, type FormEvent } from "react";
import type Option from "../Option";
import parseConfiguration from "../parser";
import Field from "../components/Field";
import styles from "../styles/App.module.sass";
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom";

// eslint-disable-next-line
function drawOptions (
  setOption: (option: Option) => void, options: Option[]
): JSX.Element[] {
  return options.map((option) =>
    <Field
      key={option.id}
      type="number"
      option={option}
      valueChanged={setOption}
    />
  );
}

const ConfigScreen: React.FC = () => {
  const [configuration, setConfiguration] = useState<Configuration>({
    name: "Default Configuration",
    entries: []
  });

  const drawConfiguration = (): JSX.Element[] =>
    configuration.entries.map((entry) =>
      <div className={styles.configurationEntry} key={entry.id}>
        <p className={styles.configurationEntryName}>{entry.id}</p>
        <p className={styles.configurationEntryValue}>{entry.value}</p>
      </div>
    );

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const source = (event.target as any)["configuration-source"].value;
    const entries = parseConfiguration(source);

    setConfiguration((oldConfiguration) => ({ ...oldConfiguration, entries }));
  };

  return (

  <div className={styles.app}>
  <div className={styles.panel}>
    <form onSubmit={handleFormSubmit} className={styles.form}>
      <textarea
        name="configuration-source"
        className={styles.configurationSourceText}></textarea>
      <div className={styles.configurationSourceHeader}>

        <select className={styles.gameSelect}
          name="config-type" id="config-type">
          <option value="csgo">CS:GO</option>
        </select>
        <button type="submit" className={styles.parseButton}>Parse</button>
      </div>
    </form>
  </div>
  <div className={styles.panel}>
    <div className={styles.configurationEntries}>
      { drawConfiguration() }
    </div>
  </div>
</div>
  );
};

const Home: React.FC = () => {
  return (
    <div>
      <br />
      <h2>Home</h2>
      <br />

    </div>
  );
};

const Login: React.FC = () => {
  function handleSubmit (event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log("submitted");
  }

  return (
    <div>

    <div className={styles.login}>
      <div className={styles.loginBox}>
        <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <br />
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" name="username" />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />
        <br /><br />
        <input type="submit" value="Submit" />

      </form>
    </div>
    </div>
    </div>
  );
};

function App (): JSX.Element {
  const textstyle = {
    color: "black"
  };

  return (
    <div>
    <Router>
    <div>
        <Link style={textstyle} to="/">Home</Link> &nbsp;
        <Link style={textstyle} to="/login">Login </Link> &nbsp;
        <Link style={textstyle} to="/configs">Configs </Link> &nbsp;
    </div>

      <Routes>
        <Route path="/configs" element={<ConfigScreen/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
      <div>
        </div>
      </div>
  );
}

export default App;
