import type Option from "../Option";

function Field (props: {
  option: Option
  type: string
  valueChanged: (option: Option) => void
}): JSX.Element {
  const { option } = props;

  const onValueChanged = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    props.valueChanged({ ...option, value });
  };

  return (
    <div>
      <label htmlFor={option.id}>
        {option.name}
      </label>

      <input
        id={option.id}
        type={props.type}
        value={option.value}
        onChange={onValueChanged}
        />
    </div>
  );
}

export default Field;
