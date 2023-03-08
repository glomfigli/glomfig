declare module "*.module.sass";

type OptionValue = number | string;

interface Option {
  id: string
  name: string
  value: OptionValue
}

interface ConfiurationEntry {
  id: string
  value: string
}

interface Configuration {
  name: string
  entries: ConfiurationEntry[]
}
