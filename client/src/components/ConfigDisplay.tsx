import { useState, type FormEvent } from "react";
import parseConfiguration from "../parser";
import styles from "../styles/App.module.sass";

export const ConfigDisplay: React.FC = () => {
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
