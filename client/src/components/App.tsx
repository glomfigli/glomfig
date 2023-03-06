import { useState } from "react";
import type Option from "../Option";
import Field from "../components/Field";

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
  const [options, setOptions] = useState<Option[]>(
    [
      { id: "cl_crosshairgap", name: "Crosshair gap", value: 0 },
      { id: "cl_crosshairsize", name: "Crosshair size", value: 0 }
    ]
  );

  const setOption = (newOption: Option): void => {
    const { id, value } = newOption;

    const targetIndex = options.findIndex(
      (option) => option.id === id
    );

    if (targetIndex >= 0) {
      const newOptions = Array.from(options);
      newOptions[targetIndex].value = value;
      setOptions(newOptions);
    }
  };

  return (
    <div>
      { drawOptions(setOption, options) }
    </div>
  );
}

export default App;
