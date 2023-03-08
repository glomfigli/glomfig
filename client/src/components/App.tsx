import { useState, type FormEvent } from "react";
import type Option from "../Option";
import parseConfiguration from "../parser";
import Field from "../components/Field";
import styles from "../styles/App.module.sass";

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

function App (): JSX.Element {
  const [configuration, setConfiguration] = useState<Configuration>({
    name: "Default Configuration",
    entries: []
  });

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const source = (event.target as any)["configuration-source"].value;
    const entries = parseConfiguration(source);

    setConfiguration((oldConfiguration) => ({ ...oldConfiguration, entries }));
  };

  const drawConfiguration = (): JSX.Element[] =>
    configuration.entries.map((entry) =>
      <div className={styles.configurationEntry} key={entry.id}>
        <p className={styles.configurationEntryName}>{entry.id}</p>
        <p className={styles.configurationEntryValue}>{entry.value}</p>
      </div>
    );

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
}

export default App;
