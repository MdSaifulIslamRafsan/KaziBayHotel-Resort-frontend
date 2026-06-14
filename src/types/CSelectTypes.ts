/* eslint-disable @typescript-eslint/no-explicit-any */
export type TCSelect = {
  label?: string;
  name: string;
  placeholder?: string;
  options: {
    value: string;
    label: string;
    disabled?: boolean;
  }[];
  isRequired?: boolean;
  onValueChange?: (value: string) => void;
  className?: string;

};
