type OptionValue = number | string;

interface Option {
  id: string;
  name: string;
  value: OptionValue;
}

export default Option;
